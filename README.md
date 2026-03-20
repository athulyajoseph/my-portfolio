# Athulya Joseph — Portfolio

Premium React portfolio. Built with Create React App, zero UI libraries, pure CSS.

## Quick Start

```bash
npm install
npm start
```

Runs at `http://localhost:3000`

---

## Build

```bash
npm run build
```

Outputs to `/build` — ready to deploy anywhere.

---

## Deploy to GitHub Pages

### 1. Update `package.json`
Set the `homepage` field to your GitHub Pages URL:
```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
```

### 2. Install gh-pages (already in devDependencies)
```bash
npm install
```

### 3. Deploy
```bash
npm run deploy
```

This runs `npm run build` then pushes `/build` to the `gh-pages` branch automatically.

### 4. Enable GitHub Pages
- Go to your repo → **Settings** → **Pages**
- Source: `Deploy from a branch`
- Branch: `gh-pages` / `root`
- Save — live in ~60 seconds at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

---

## Push to GitHub (first time)

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
npm run deploy
```

---

## Customisation

All content lives in one file: **`src/data/portfolio.js`**

- Update name, email, phone, LinkedIn, location
- Edit experience bullets, skill tags, project descriptions
- Add/remove items from any array

Colors and fonts are in **`src/index.css`** under `:root { ... }`

---

## Project Structure

```
src/
├── data/
│   └── portfolio.js        ← All your content here
├── components/
│   ├── Cursor.jsx / .css
│   ├── Navbar.jsx / .css
│   ├── Hero.jsx / .css
│   ├── About.jsx / .css
│   ├── Skills.jsx / .css
│   ├── Experience.jsx / .css
│   ├── Projects.jsx / .css
│   ├── Education.jsx / .css
│   ├── Footer.jsx / .css
│   ├── SectionHeader.jsx / .css
│   └── useReveal.js        ← Scroll reveal hook
├── App.jsx
├── App.css
├── index.js
└── index.css               ← Design tokens (CSS variables)
```

---

Built with ♥ for Athulya Joseph
