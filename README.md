# @vimalkrml/dev-template

A lightweight front-end starter template that includes a CSS reset and a custom grid system. Simply clone the repository and start building your project with a clean foundation.

[![npm version](https://img.shields.io/npm/v/@vimalkrml/dev-template.svg)](https://www.npmjs.com/package/@vimalkrml/dev-template)
[![license](https://img.shields.io/npm/l/@vimalkrml/dev-template.svg)](https://github.com/vimalkrml/Dev-Template/blob/main/LICENSE)

---

## 🚀 Features

- CSS Reset for consistent cross-browser styling
- Custom responsive grid system
- Clean, minimal structure to kickstart development
- Easily extendable and customizable

---

## 📦 Installation

### via npm

```bash
npm install @vimalkrml/dev-template
```

### via CDN (jsDelivr)

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@vimalkrml/dev-template/src/style.css"
/>
```

### via Clone

```bash
git clone https://github.com/vimalkrml/Dev-Template.git
cd Dev-Template
```

---

## 🛠️ Usage

### In HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Project</title>
    <link
      rel="stylesheet"
      href="node_modules/@vimalkrml/dev-template/src/style.css"
    />
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-6">Left Column</div>
        <div class="col-6">Right Column</div>
      </div>
    </div>
  </body>
</html>
```

### In a JS/Bundler project (Webpack, Vite, etc.)

```js
import "@vimalkrml/dev-template/src/style.css";
```

---

## 🗂️ Project Structure

```
Dev-Template/
├── src/
│   └── style.css       # CSS reset + grid system
├── pages/              # Example HTML pages
└── README.md
```

---

## 📐 Grid System

The template includes a 12-column responsive grid system.

```html
<!-- Full width -->
<div class="col-12">Full Width</div>

<!-- Two equal columns -->
<div class="row">
  <div class="col-6">Left</div>
  <div class="col-6">Right</div>
</div>

<!-- Three columns -->
<div class="row">
  <div class="col-4">One</div>
  <div class="col-4">Two</div>
  <div class="col-4">Three</div>
</div>
```

---

## 🔄 CSS Reset

The included CSS reset ensures consistent rendering across all browsers by:

- Removing default margins and padding
- Setting `box-sizing: border-box` globally
- Normalizing font sizes and line heights
- Resetting list styles, links, and form elements

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 📄 License

MIT © [Vimal K R](https://github.com/vimalkrml)
