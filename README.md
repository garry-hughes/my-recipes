# My Recipes 🍽️

A static recipe website automatically deployed to GitHub Pages. Browse your favorite recipes through a clean, responsive web interface.

## Features

- 📱 **Responsive Web Interface**: Browse recipes on any device
- 🥘 **Structured Recipes**: Each recipe includes ingredients, method, timing planner, and recommended drinks
- 🌐 **GitHub Pages**: Public static site automatically generated from recipes.json
- 🔄 **Automatic Deployment**: GitHub Actions automatically builds and deploys when recipes are updated

## How it Works

- **Static Site Generation**: A Node.js script (`generate-static-site.js`) reads recipes from `data/recipes.json` and generates HTML pages
- **Automatic Deployment**: GitHub Actions automatically builds and deploys the static site when recipes are updated
- **Public Access**: No authentication required - anyone can view the recipes

## Accessing the Site

The GitHub Pages site is automatically available at:
`https://garry-hughes.github.io/my-recipes/`

## Local Development

```bash
# Install dependencies
npm install

# Generate static site locally
npm run build:static

# Serve locally for testing
cd docs && python3 -m http.server 8080
# Visit http://localhost:8080
```

## Static Site Features

- 📱 **Responsive Design**: Works on all devices
- 🎨 **Clean UI**: Modern card-based layout
- 🔍 **Recipe Details**: Individual pages for each recipe
- 🏷️ **Metadata Display**: Prep time, cook time, serving size
- 📊 **Recipe Grid**: Easy browsing of all available recipes

The static site automatically updates whenever `data/recipes.json` is modified, ensuring the public site always reflects the latest recipe collection.

## Recipe Structure

Each recipe includes the following sections:
- **Ingredients**: List of all required ingredients
- **Method**: Step-by-step cooking instructions
- **Timing Planner**: Schedule for meal preparation
- **Recommended Drinks**: Suggested beverages to pair with the dish
- **Metadata**: Prep time, cook time, and serving size

## Adding New Recipes

To add a new recipe, edit `data/recipes.json` and add a new recipe object following the existing format. When you push the changes to the main branch, the static site will automatically be rebuilt and deployed.

## Included Recipes

The app comes pre-loaded with these recipes:
- Hungarian Goulash (Inspired by Mum's Version)
- Chicken, Corn & Pea Soup
- Split Pea & Ham Hock Soup

## GitHub Pages Setup

See [GITHUB_PAGES_SETUP.md](GITHUB_PAGES_SETUP.md) for detailed setup instructions.

## Contributing

Feel free to submit issues and enhancement requests!
