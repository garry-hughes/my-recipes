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

## Source of truth

- **Canonical data:** `data/recipes.json` — edit this to add or change recipes.
- **Generator:** `generate-static-site.js` — builds the GitHub Pages site from that JSON.
- **Generated output:** `docs/` — produced by `npm run build:static` / CI. Do not edit or commit it; it is gitignored and rebuilt on every Pages deploy.
- Optional human notes under `recipes/` were removed so they cannot drift from JSON. Prefer fields on the recipe objects (`notes`, `timing`, etc.) instead.

## Local Development

```bash
# Install dependencies
npm install

# Build generated site into docs/ (gitignored)
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

Edit `data/recipes.json` (pretty-printed JSON). Add a recipe object with at least `id`, `title`, `ingredients`, and `method`. Push to `main` and GitHub Actions regenerates `docs/` and deploys Pages. Run `npm test` locally to validate the dataset first.

## Included Recipes

- Hungarian Goulash (Inspired by Mum's Version)
- Chicken, Corn & Pea Soup
- Split Pea & Ham Hock Soup
- Ultimate Instant Pot Beef Rendang
- Bernadette-Style Instant Pot Beef Rendang
- Mum's Lasagne
- Mum's Self-Saucing Chocolate Pudding
- Chuck Steak Ragu
- Pork Carnitas
- Cottage Pie
- Chuck Steak Chilli Con Carne
- Instant Pot Whole Chicken with Air-Fryer Grill Finish
- Chicken, Prawn & Pork Wonton Combination Noodle Soup
- Brined Air Fryer Roast Chicken with Instant Pot Potatoes & Pan Gravy

## GitHub Pages Setup

See [GITHUB_PAGES_SETUP.md](GITHUB_PAGES_SETUP.md) for detailed setup instructions.

## Contributing

Feel free to submit issues and enhancement requests!