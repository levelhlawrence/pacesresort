# Paces Worldwide — App

React application for the [Paces Worldwide](https://www.retreat.pacesworldwide.com) resort website. It's a single-page site built with Create React App, styled with Tailwind CSS, and deployed to GitHub Pages.

## Pages / Sections

The app renders one continuous page ([src/App.js](src/App.js)) made up of:

- **Home** — [src/Pages/Home.js](src/Pages/Home.js)
- **About** — [src/Pages/About.js](src/Pages/About.js)
- **Gallery** — [src/Pages/Gallery.js](src/Pages/Gallery.js) (Rooms, Villa, Surroundings)
- **Contact** — [src/Pages/Contacts.js](src/Pages/Contacts.js)

Navigation ([src/Components/Nav.js](src/Components/Nav.js)) uses smooth-scroll hash links (`react-router-hash-link`) to jump between sections.

## Getting Started

Requires Node.js and npm.

```bash
npm install
npm start
```

Runs the app in development mode at [http://localhost:3000](http://localhost:3000). The page reloads on changes.

## Available Scripts

### `npm start`

Runs the app in development mode with hot reload.

### `npm run build`

Builds the app for production into the `build` folder, minified and optimized.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run deploy`

Builds the app and publishes the `build` folder to GitHub Pages via [gh-pages](https://www.npmjs.com/package/gh-pages).

## Styling

Tailwind CSS is configured via [tailwind.config.js](tailwind.config.js) and [postcss.config.js](postcss.config.js), with utility classes used directly in components. Global styles live in [src/index.css](src/index.css).

## Tech Stack

- [React 18](https://reactjs.org/) via [Create React App](https://github.com/facebook/create-react-app)
- [Tailwind CSS](https://tailwindcss.com/) + [PostCSS](https://postcss.org/) + [Autoprefixer](https://github.com/postcss/autoprefixer)
- [React Router](https://reactrouter.com/) + [react-router-hash-link](https://www.npmjs.com/package/react-router-hash-link)
- [react-icons](https://react-icons.github.io/react-icons/)
