# @vimalkrml/dev-template

A utility-first CSS framework that works without any build step, config, or CLI. Drop one `<link>` tag and start building — with dark mode, animations, form components, and a full design token system built right in.

[![npm version](https://img.shields.io/npm/v/@vimalkrml/dev-template.svg?style=for-the-badge&color=CB3837)](https://www.npmjs.com/package/@vimalkrml/dev-template)
[![npm downloads](https://img.shields.io/npm/dt/@vimalkrml/dev-template.svg?style=for-the-badge&color=CB3837)](https://www.npmjs.com/package/@vimalkrml/dev-template)
[![license](https://img.shields.io/npm/l/@vimalkrml/dev-template.svg?style=for-the-badge&color=6C63FF)](https://github.com/vimalkrml/Dev-Template/blob/main/LICENSE)

---

## ⚡ Why This Package?

| Feature                     | Tailwind         | Bootstrap  | **@vimalkrml/dev-template** |
| --------------------------- | ---------------- | ---------- | --------------------------- |
| Zero build step             | ❌ Requires CLI  | ✅         | ✅                          |
| CDN ready                   | ⚠️ Partial       | ✅         | ✅                          |
| Dark mode built-in          | ⚠️ Config needed | ❌         | ✅                          |
| CSS Variable theming        | ❌               | ❌         | ✅                          |
| Form components included    | ❌ Plugin needed | ✅         | ✅                          |
| Animation library           | ❌               | ❌         | ✅                          |
| Modular file imports        | ❌               | ❌         | ✅                          |
| Conflict-free prefix (`c-`) | ❌               | ❌         | ✅                          |
| Reduced motion support      | ❌               | ❌         | ✅                          |
| Print utilities             | ❌               | ⚠️ Partial | ✅                          |

---

## 🚀 Features

- ✅ **Zero build step** — no CLI, no config, no purge, no PostCSS
- ✅ **Dark mode built-in** — via `data-theme="dark"` or `prefers-color-scheme`
- ✅ **CSS Variables theming** — override any token with one line of CSS
- ✅ **Modular imports** — use the full bundle or import only what you need
- ✅ **Full CSS reset** — consistent cross-browser baseline
- ✅ **Flexbox + CSS Grid** — 12-column responsive grid with `sm/md/lg/xl/2xl` breakpoints
- ✅ **Spacing system** — complete `margin` and `padding` scale
- ✅ **Typography utilities** — font size, weight, line height, tracking, transform
- ✅ **Color system** — full palette for text, background, border with semantic tokens
- ✅ **Effects** — shadows, borders, opacity, transforms, filters, backdrop-blur
- ✅ **16 animations** — fade, slide, scale, spin, pulse, skeleton loader, float, and more
- ✅ **Form components** — inputs, textarea, select, checkbox, radio, buttons (no JS)
- ✅ **Scroll & snap** — scroll behavior, snap, custom scrollbar, touch-action
- ✅ **Print utilities** — show/hide, page breaks, print-only elements
- ✅ **Conflict-free** — `c-` prefix never clashes with existing CSS
- ✅ **Reduced motion** — animations auto-disabled for accessibility

---

## 📦 Installation

### via npm

```bash
npm install @vimalkrml/dev-template
```

### via CDN (jsDelivr) — no install needed

```html
<!-- Full bundle -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@vimalkrml/dev-template/src/index.css"
/>

<!-- Or individual modules -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@vimalkrml/dev-template/src/tokens.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@vimalkrml/dev-template/src/grid.css"
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
      href="node_modules/@vimalkrml/dev-template/src/index.css"
    />
  </head>
  <body>
    <div class="c-container">
      <div class="c-row">
        <div class="c-col-6">Left Column</div>
        <div class="c-col-6">Right Column</div>
      </div>
    </div>
  </body>
</html>
```

### In React / Next.js / Vite

```js
// main.jsx or _app.jsx — applies globally
import "@vimalkrml/dev-template/src/index.css";
```

### Modular imports — only load what you use

```js
import "@vimalkrml/dev-template/src/tokens.css";
import "@vimalkrml/dev-template/src/grid.css";
import "@vimalkrml/dev-template/src/spacing.css";
```

---

## 🗂️ File Structure

```
src/
├── index.css        ← imports everything (start here)
├── tokens.css       ← CSS variables: colors, spacing, shadows, easing
├── reset.css        ← full browser reset
├── grid.css         ← flexbox + CSS grid + responsive columns
├── spacing.css      ← margin + padding utilities
├── sizing.css       ← width, height, min/max, viewport units
├── display.css      ← display, position, overflow, z-index
├── typography.css   ← font, text, line-height, tracking
├── colors.css       ← text, background, border, gradient colors
├── effects.css      ← shadows, borders, opacity, transforms, filters
├── animation.css    ← 16 keyframes + animation control utilities
├── forms.css        ← input, button, select, checkbox components
├── scroll.css       ← scroll snap, custom scrollbar, touch-action
└── print.css        ← print show/hide, page breaks
```

---

## 🌗 Dark Mode

No JavaScript required. Two ways to activate:

### Manual toggle

```html
<html data-theme="dark"></html>
```

### Auto — respects system preference

```html
<!-- No setup needed — works automatically via prefers-color-scheme -->
<html></html>
```

### Override any token

```css
:root {
  --c-primary-500: #your-brand-color;
  --c-bg: #0f172a;
  --c-fg: #f8fafc;
}
```

---

## 📐 Grid System

12-column responsive flexbox grid with breakpoints at `md` (768px), `lg` (1024px), `xl` (1280px), and `2xl` (1536px).

```html
<!-- Two equal columns -->
<div class="c-row">
  <div class="c-col-6">Left</div>
  <div class="c-col-6">Right</div>
</div>

<!-- Responsive: full → half → third -->
<div class="c-row">
  <div class="c-col-12 c-col-md-6 c-col-lg-4">Card</div>
  <div class="c-col-12 c-col-md-6 c-col-lg-4">Card</div>
  <div class="c-col-12 c-col-md-6 c-col-lg-4">Card</div>
</div>

<!-- CSS Grid -->
<div class="c-grid c-grid-cols-3 c-gap-6">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>

<!-- Centered content -->
<div class="c-container c-flex c-items-center c-justify-center">
  <div class="c-col-md-8 c-col-lg-6">Centered</div>
</div>
```

---

## 🎨 Design Tokens

Override any token globally:

```css
:root {
  --c-primary-500: #6c63ff;
  --c-font-sans: "Inter", sans-serif;
  --c-radius-md: 10px;
  --c-shadow-md: 0 4px 20px rgba(0, 0, 0, 0.1);
}
```

---

## 🖊️ Form Components

Production-ready form elements with no JavaScript:

```html
<!-- Input -->
<div class="c-form-group">
  <label class="c-label c-label-required">Email</label>
  <input type="email" class="c-input" placeholder="you@example.com" />
  <span class="c-form-hint">We'll never share your email.</span>
</div>

<!-- Select -->
<select class="c-select">
  <option>Option 1</option>
  <option>Option 2</option>
</select>

<!-- Textarea -->
<textarea class="c-textarea" rows="4" placeholder="Your message..."></textarea>

<!-- Buttons -->
<button class="c-btn c-btn-primary">Primary</button>
<button class="c-btn c-btn-secondary">Secondary</button>
<button class="c-btn c-btn-outline">Outline</button>
<button class="c-btn c-btn-ghost">Ghost</button>
<button class="c-btn c-btn-danger">Danger</button>

<!-- Button sizes -->
<button class="c-btn c-btn-primary c-btn-sm">Small</button>
<button class="c-btn c-btn-primary c-btn-lg">Large</button>
<button class="c-btn c-btn-primary c-btn-full">Full Width</button>

<!-- Loading state -->
<button class="c-btn c-btn-primary c-btn-loading">Saving...</button>

<!-- Input group -->
<div class="c-input-group">
  <span class="c-input-addon">https://</span>
  <input type="text" class="c-input" placeholder="yoursite.com" />
</div>
```

---

## 🎞️ Animations

16 built-in keyframe animations with full duration, delay, and iteration control:

```html
<div class="c-animate-fade-in">Fade in</div>
<div class="c-animate-slide-up">Slide up</div>
<div class="c-animate-skeleton c-rounded c-h-4 c-mb-2"></div>
<svg class="c-animate-spin c-size-5">...</svg>
<img class="c-animate-float" src="hero.png" />

<!-- Delay and duration control -->
<div class="c-animate-slide-up c-animate-delay-300 c-animate-duration-500">
  Delayed entrance
</div>
```

Available: `fade-in` `fade-out` `slide-up` `slide-down` `slide-left` `slide-right` `scale-in` `scale-out` `spin` `ping` `pulse` `bounce` `shake` `wiggle` `float` `heartbeat` `skeleton` `blink`

---

## ✨ Effects & Hover Utilities

```html
<div class="c-rounded-lg c-shadow c-hover-lift c-transition">Card</div>
<img class="c-hover-scale c-transition" src="image.jpg" />
<div class="c-backdrop-blur-md c-bg-white c-opacity-80">Glass effect</div>
<img class="c-grayscale c-hover-brightness" src="photo.jpg" />
```

---

## 📜 Scroll Utilities

```html
<!-- Horizontal scroll snap -->
<div class="c-flex c-snap-x c-overflow-x-auto c-scrollbar-none">
  <div class="c-snap-start c-flex-shrink-0 c-w-80">Slide 1</div>
  <div class="c-snap-start c-flex-shrink-0 c-w-80">Slide 2</div>
</div>

<!-- Custom thin scrollbar -->
<div class="c-overflow-y-auto c-scrollbar-thin c-max-h-64">Long content...</div>
```

---

## 🖨️ Print Utilities

```html
<nav class="c-print-hidden">Navigation</nav>
<footer class="c-print-only">Printed by MyApp</footer>
<div class="c-print-break-inside-avoid">Keep this block together</div>
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request against the `dev` branch

> ⚠️ Direct pushes to `main` are not accepted. All contributions go through Pull Requests and are reviewed before merging.

---

## 📄 License

MIT © [Vimal K R](https://github.com/vimalkrml)
