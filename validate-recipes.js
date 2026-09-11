#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const recipesPath = path.join(__dirname, 'data', 'recipes.json');
const REQUIRED = ['id', 'title', 'ingredients', 'method'];
const KNOWN_FIELDS = new Set([
  'id', 'title', 'ingredients', 'method',
  'serves', 'prepTime', 'cookTime', 'timing', 'totalTime', 'notes',
  'source', 'recommendedDrinks', 'tags', 'appliances', 'summary'
]);

function fail(msg) {
  console.error(`✗ ${msg}`);
  process.exitCode = 1;
}

function warn(msg) {
  console.warn(`⚠ ${msg}`);
}

let recipes;
try {
  const raw = fs.readFileSync(recipesPath, 'utf8');
  recipes = JSON.parse(raw);
} catch (err) {
  console.error(`✗ Failed to parse ${recipesPath}: ${err.message}`);
  process.exit(1);
}

if (!Array.isArray(recipes)) {
  console.error('✗ recipes.json must be an array of recipes');
  process.exit(1);
}

const seenIds = new Map();

recipes.forEach((recipe, index) => {
  const label = recipe && recipe.id ? `recipe "${recipe.id}"` : `recipe at index ${index}`;

  if (!recipe || typeof recipe !== 'object' || Array.isArray(recipe)) {
    fail(`${label}: must be an object`);
    return;
  }

  for (const field of REQUIRED) {
    if (!(field in recipe) || recipe[field] === null || recipe[field] === '') {
      fail(`${label}: missing required field "${field}"`);
    }
  }

  if (typeof recipe.id !== 'string') {
    fail(`${label}: "id" must be a string`);
  } else if (seenIds.has(recipe.id)) {
    fail(`duplicate id "${recipe.id}" (indices ${seenIds.get(recipe.id)} and ${index})`);
  } else {
    seenIds.set(recipe.id, index);
  }

  if (typeof recipe.title !== 'string') {
    fail(`${label}: "title" must be a string`);
  }

  if (!Array.isArray(recipe.ingredients)) {
    fail(`${label}: "ingredients" must be an array`);
  } else if (recipe.ingredients.length === 0) {
    warn(`${label}: "ingredients" is empty`);
  }

  if (!Array.isArray(recipe.method)) {
    fail(`${label}: "method" must be an array`);
  } else if (recipe.method.length === 0) {
    warn(`${label}: "method" is empty`);
  }

  for (const key of Object.keys(recipe)) {
    if (!KNOWN_FIELDS.has(key)) {
      warn(`${label}: unknown field "${key}"`);
    }
  }

  const hasSplitTime = Boolean(recipe.prepTime || recipe.cookTime || recipe.timing);
  const hasTotal = Boolean(recipe.totalTime);
  if (hasSplitTime && hasTotal) {
    warn(`${label}: has both totalTime and prep/cook/timing — prefer one style`);
  }
});

if (process.exitCode) {
  console.error(`\nValidation failed for ${recipes.length} recipes.`);
  process.exit(process.exitCode);
}

console.log(`✓ ${recipes.length} recipes validated (${recipesPath})`);
