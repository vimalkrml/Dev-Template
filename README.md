# FluxGrid CSS

**A utility-first CSS framework by [Datafluxgrid](https://www.linkedin.com/company/datafluxgrid)**

FluxGrid CSS is a complete, production-ready CSS framework that works without any build step, configuration file, or CLI setup. Install it once, import it once, and start building — with dark mode, animations, form components, scroll utilities, print utilities, and a full design token system included out of the box.

[![npm version](https://img.shields.io/npm/v/@datafluxgrid/fluxgrid-css.svg?style=for-the-badge&color=CB3837)](https://www.npmjs.com/package/@datafluxgrid/fluxgrid-css)
[![npm downloads](https://img.shields.io/npm/dt/@datafluxgrid/fluxgrid-css.svg?style=for-the-badge&color=CB3837)](https://www.npmjs.com/package/@datafluxgrid/fluxgrid-css)
[![license](https://img.shields.io/npm/l/@datafluxgrid/fluxgrid-css.svg?style=for-the-badge&color=6C63FF)](https://github.com/vimalkrml/Dev-Template/blob/main/LICENSE)

---

## Table of Contents

- [Why FluxGrid CSS](#why-fluxgrid-css)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Dark Mode](#dark-mode)
- [Design Tokens](#design-tokens)
- [Grid System](#grid-system)
- [Typography](#typography)
- [Colors](#colors)
- [Spacing](#spacing)
- [Effects](#effects)
- [Animations](#animations)
- [Form Components](#form-components)
- [Scroll Utilities](#scroll-utilities)
- [Print Utilities](#print-utilities)
- [Font Plugin](#font-plugin)
- [Contributing](#contributing)
- [License](#license)

---

## Why FluxGrid CSS

Most CSS frameworks today require a build pipeline before you can write a single line of UI. FluxGrid CSS takes a different approach — it is a single CSS file that works anywhere, in any stack, with zero tooling required.

| Feature                   | Tailwind          | Bootstrap | FluxGrid CSS          |
| ------------------------- | ----------------- | --------- | --------------------- |
| Zero build step           | No — requires CLI | Yes       | Yes                   |
| CDN ready                 | Partial           | Yes       | Yes                   |
| Dark mode built-in        | Config required   | No        | Yes                   |
| CSS Variable theming      | No                | No        | Yes                   |
| Form components included  | Plugin required   | Yes       | Yes                   |
| Animation library         | No                | No        | Yes                   |
| Modular file imports      | No                | No        | Yes                   |
| Conflict-free prefix      | No                | No        | Yes — uses `c-`       |
| Reduced motion support    | No                | No        | Yes                   |
| Font utilities (optional) | No                | No        | Yes — separate module |
| Print utilities           | No                | Partial   | Yes                   |
| Scroll snap utilities     | Yes               | No        | Yes                   |

---

## Features

**Zero build step.** No PostCSS, no CLI, no config file. Drop a link tag or run a single install command and you are ready.

**Dark mode built-in.** Switch between light and dark using a single HTML attribute or let the browser decide automatically based on the system preference.

**CSS Variable theming.** Every color, spacing value, shadow, and radius is a CSS variable. Override your brand color in one line without touching the library.

**Modular imports.** Import the full bundle through one file or import only the modules you need — grid, spacing, typography, animations, or forms independently.

**Full CSS reset.** A thorough browser reset that normalises styles across Chrome, Firefox, Safari, and Edge before your utilities apply.

**Flexbox and CSS Grid.** A 12-column responsive flexbox grid with breakpoints at 640px, 768px, 1024px, 1280px, and 1536px, plus a full CSS Grid utility set with auto-fill and named column spans.

**Spacing system.** A complete margin and padding scale from 0 to 128px covering every direction — top, bottom, left, right, horizontal, and vertical — with responsive variants.

**Typography utilities.** Font family, size from xs to 8xl, weight from thin to black, line height, letter spacing, text alignment, transform, truncation, and column layout.

**Color system.** A full palette for primary, gray, success, error, warning, and info across ten shades each, exposed as utility classes for text, background, border, and gradient.

**Effects.** Box shadow, ring, opacity, transform, scale, rotate, translate, skew, filter, backdrop-blur, brightness, contrast, grayscale, sepia, and hover utilities.

**Animations.** Over 50 keyframe animations including fade, slide, scale, zoom, flip, rotate, bounce, shake, wiggle, jello, rubber band, tada, float, glow, ripple, typewriter, skeleton loader, shimmer, blur, morph, and more — with full control over duration, delay, iteration, direction, fill mode, and easing.

**Form components.** Styled inputs, textareas, selects, checkboxes, radio buttons, range sliders, buttons in six variants and five sizes, input groups, labels, hints, error messages, and a loading button state — all without JavaScript.

**Scroll and snap.** Scroll behavior, scroll snap types and alignment, overscroll control, touch action, custom thin scrollbar, and scrollbar hiding utilities.

**Print utilities.** Show and hide elements on print, page break control, print-only content, and color adjust for accurate print rendering.

**Conflict-free.** Every class uses the `c-` prefix, which means FluxGrid CSS can be safely added to any existing project — legacy codebases, projects already using Bootstrap or Tailwind, or greenfield applications.

**Reduced motion.** All animations are automatically disabled for users who have enabled the reduced motion system preference, with no configuration required.

---

## Installation

### Via npm

```bash
npm install @datafluxgrid/fluxgrid-css
```

### Via CDN — no install required

```html
<!-- Full bundle -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@datafluxgrid/fluxgrid-css/src/css/index.css"
/>

<!-- Individual modules -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@datafluxgrid/fluxgrid-css/src/css/tokens.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@datafluxgrid/fluxgrid-css/src/css/grid.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@datafluxgrid/fluxgrid-css/src/css/forms.css"
/>
```

### Via Git clone

```bash
git clone https://github.com/vimalkrml/fluxgrid-css.git
cd fluxgrid-css

```

---

## Usage

### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Project</title>
    <link
      rel="stylesheet"
      href="node_modules/@datafluxgrid/fluxgrid-css/src/css/index.css"
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

### React, Next.js, or Vite

```js
// main.jsx or _app.jsx
import "@datafluxgrid/fluxgrid-css/src/css/index.css";
```

### Modular — import only what you need

```js
import "@datafluxgrid/fluxgrid-css/src/css/tokens.css";
import "@datafluxgrid/fluxgrid-css/src/css/grid.css";
import "@datafluxgrid/fluxgrid-css/src/css/spacing.css";
import "@datafluxgrid/fluxgrid-css/src/css/forms.css";
```

---

## File Structure

```
src/css/
├── index.css         Entry point — imports all modules
├── tokens.css        CSS variables for colors, spacing, shadows, easing, and typography
├── reset.css         Full browser normalisation reset
├── grid.css          Flexbox grid, CSS Grid, containers, responsive columns
├── spacing.css       Margin and padding utilities across all directions
├── sizing.css        Width, height, min, max, and viewport unit utilities
├── display.css       Display, position, overflow, z-index, float, aspect ratio
├── typography.css    Font family, size, weight, line height, tracking, alignment
├── colors.css        Text, background, border, and gradient color utilities
├── effects.css       Shadows, borders, opacity, transforms, filters, transitions
├── animation.css     50+ keyframe animations with duration, delay, and easing control
├── forms.css         Input, textarea, select, checkbox, radio, button components
├── scroll.css        Scroll snap, overscroll, touch action, scrollbar utilities
├── print.css         Print show/hide, page breaks, print-only content
└── fonts.css         Optional — Google Font utilities via c-font-* classes
```

---

## Dark Mode

FluxGrid CSS supports dark mode out of the box with no JavaScript and no configuration.

**Option 1 — Manual toggle via HTML attribute**

```html
<html data-theme="dark"></html>
```

**Option 2 — Automatic via system preference**

```html
<html>
  <!-- Dark mode activates automatically when the user's OS is set to dark -->
</html>
```

**Option 3 — JavaScript toggle**

```js
document.documentElement.setAttribute("data-theme", "dark");
document.documentElement.setAttribute("data-theme", "light");
```

**Prevent auto dark mode**

```html
<html data-theme="light">
  <!-- Forces light mode even when the system prefers dark -->
</html>
```

---

## Design Tokens

Every design decision in FluxGrid CSS is exposed as a CSS variable. Override any token in your own stylesheet and the change propagates across all utilities that reference it.

```css
:root {
  /* Brand */
  --c-primary-500: #6c63ff;
  --c-primary-600: #5a52d5;
  --c-primary-700: #4a43b8;

  /* Typography */
  --c-font-sans: "Inter", system-ui, sans-serif;
  --c-font-mono: "Fira Code", Consolas, monospace;

  /* Shape */
  --c-radius-md: 10px;
  --c-radius-lg: 16px;

  /* Elevation */
  --c-shadow-md: 0 4px 20px rgba(0, 0, 0, 0.1);
  --c-shadow-lg: 0 8px 40px rgba(0, 0, 0, 0.15);

  /* Semantic */
  --c-bg: #ffffff;
  --c-fg: #111827;
  --c-muted: #6b7280;
  --c-border: #e5e7eb;
  --c-accent: #2563eb;
}
```

---

## Grid System

A 12-column responsive flexbox grid with five breakpoints and a full CSS Grid utility set.

**Breakpoints**

| Prefix | Minimum width    |
| ------ | ---------------- |
| (none) | All screen sizes |
| md     | 768px            |
| lg     | 1024px           |
| xl     | 1280px           |
| 2xl    | 1536px           |

**Flexbox grid**

```html
<!-- Two equal columns -->
<div class="c-row">
  <div class="c-col-6">Left</div>
  <div class="c-col-6">Right</div>
</div>

<!-- Sidebar layout -->
<div class="c-row">
  <div class="c-col-4">Sidebar</div>
  <div class="c-col-8">Main content</div>
</div>

<!-- Responsive columns — stacks on mobile, side by side on tablet, thirds on desktop -->
<div class="c-row">
  <div class="c-col-12 c-col-md-6 c-col-lg-4">Card</div>
  <div class="c-col-12 c-col-md-6 c-col-lg-4">Card</div>
  <div class="c-col-12 c-col-md-6 c-col-lg-4">Card</div>
</div>
```

**CSS Grid**

```html
<!-- Three equal columns with gap -->
<div class="c-grid c-grid-cols-3 c-gap-6">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>

<!-- Auto-fill responsive grid -->
<div
  class="c-grid c-gap-4"
  style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))"
>
  <div>Item</div>
  <div>Item</div>
  <div>Item</div>
</div>

<!-- Span columns -->
<div class="c-grid c-grid-cols-12 c-gap-4">
  <div class="c-col-span-8">Main</div>
  <div class="c-col-span-4">Aside</div>
</div>
```

**Container widths**

```html
<div class="c-container">
  <!-- max-width: 1152px -->
  <div class="c-container-sm">
    <!-- max-width: 640px  -->
    <div class="c-container-lg">
      <!-- max-width: 1024px -->
      <div class="c-container-xl">
        <!-- max-width: 1280px -->
        <div class="c-container-fluid"><!-- full width        --></div>
      </div>
    </div>
  </div>
</div>
```

---

## Typography

```html
<!-- Font size -->
<p class="c-text-xs">Extra small</p>
<p class="c-text-sm">Small</p>
<p class="c-text-base">Base</p>
<p class="c-text-lg">Large</p>
<p class="c-text-xl">Extra large</p>
<p class="c-text-2xl">2xl</p>
<p class="c-text-4xl">4xl</p>
<p class="c-text-6xl">6xl</p>

<!-- Font weight -->
<p class="c-font-light">Light</p>
<p class="c-font-normal">Normal</p>
<p class="c-font-medium">Medium</p>
<p class="c-font-semibold">Semibold</p>
<p class="c-font-bold">Bold</p>
<p class="c-font-black">Black</p>

<!-- Alignment -->
<p class="c-text-left">Left</p>
<p class="c-text-center">Center</p>
<p class="c-text-right">Right</p>

<!-- Transform -->
<p class="c-uppercase">Uppercase</p>
<p class="c-capitalize">Capitalize</p>
<p class="c-truncate">Long text that gets cut off with an ellipsis</p>
```

---

## Colors

```html
<!-- Text color -->
<p class="c-text-primary-500">Primary</p>
<p class="c-text-success-600">Success</p>
<p class="c-text-error-600">Error</p>
<p class="c-text-muted">Muted</p>

<!-- Background -->
<div class="c-bg-primary-50">Light primary background</div>
<div class="c-bg-gray-900">Dark background</div>
<div class="c-bg-success-100">Success tint</div>

<!-- Border -->
<div class="c-border c-border-primary-500">Primary border</div>
<div class="c-border c-border-error-500">Error border</div>

<!-- Gradient -->
<div class="c-gradient-to-r" style="--c-from: #3b82f6; --c-to: #8b5cf6;">
  Gradient
</div>
```

---

## Spacing

```html
<!-- Margin -->
<div class="c-mt-4">margin-top: 16px</div>
<div class="c-mb-8">margin-bottom: 32px</div>
<div class="c-mx-auto">centered horizontally</div>
<div class="c-my-6">vertical margin: 24px</div>

<!-- Padding -->
<div class="c-p-6">padding: 24px</div>
<div class="c-px-4">horizontal padding: 16px</div>
<div class="c-py-8">vertical padding: 32px</div>
<div class="c-pt-12">padding-top: 48px</div>
```

---

## Effects

```html
<!-- Shadow -->
<div class="c-shadow-sm">Small shadow</div>
<div class="c-shadow-md">Medium shadow</div>
<div class="c-shadow-xl">Extra large shadow</div>

<!-- Border radius -->
<div class="c-rounded">8px</div>
<div class="c-rounded-lg">16px</div>
<div class="c-rounded-full">Pill</div>

<!-- Opacity -->
<div class="c-opacity-50">50% opacity</div>
<div class="c-opacity-75">75% opacity</div>

<!-- Transforms -->
<div class="c-scale-105">Scaled 105%</div>
<div class="c-rotate-45">Rotated 45deg</div>
<div class="c-translate-y-2">Moved down 8px</div>

<!-- Filters -->
<img class="c-grayscale" src="photo.jpg" alt="" />
<img class="c-blur-sm" src="photo.jpg" alt="" />
<div class="c-backdrop-blur-md">Glass morphism</div>

<!-- Hover utilities -->
<div class="c-hover-lift c-transition">Lifts on hover</div>
<div class="c-hover-scale c-transition">Scales on hover</div>
<div class="c-hover-shadow c-transition">Shadow on hover</div>
```

---

## Animations

Over 50 keyframe animations with full control over duration, delay, iteration count, direction, fill mode, and easing.

```html
<!-- Entrance animations -->
<div class="c-animate-fade-in">Fade in</div>
<div class="c-animate-fade-in-up">Fade in from below</div>
<div class="c-animate-slide-up">Slide up</div>
<div class="c-animate-scale-in">Scale in</div>
<div class="c-animate-zoom-in">Zoom in</div>
<div class="c-animate-flip-x">Flip on X axis</div>
<div class="c-animate-blur-in">Blur in</div>
<div class="c-animate-roll-in">Roll in</div>
<div class="c-animate-drop-in">Drop in with bounce</div>

<!-- Attention seekers -->
<div class="c-animate-bounce">Bounce</div>
<div class="c-animate-shake">Shake</div>
<div class="c-animate-wiggle">Wiggle</div>
<div class="c-animate-heartbeat">Heartbeat</div>
<div class="c-animate-rubber-band">Rubber band</div>
<div class="c-animate-jello">Jello</div>
<div class="c-animate-tada">Tada</div>
<div class="c-animate-swing">Swing</div>

<!-- Continuous -->
<div class="c-animate-spin">Spin</div>
<div class="c-animate-pulse">Pulse</div>
<div class="c-animate-float">Float</div>
<div class="c-animate-glow">Glow</div>
<div class="c-animate-morph">Morph shape</div>
<div class="c-animate-ping">Ping</div>

<!-- Loading states -->
<div class="c-animate-skeleton c-rounded c-h-4 c-w-100"></div>
<div class="c-animate-shimmer">Shimmer</div>

<!-- Typewriter effect -->
<p class="c-animate-typewriter">This types itself out.</p>

<!-- Control -->
<div class="c-animate-fade-in c-animate-delay-300 c-animate-duration-700">
  Delayed, slower fade
</div>
<div class="c-animate-spin c-animate-infinite c-animate-ease-linear">
  Continuous spin
</div>
<div class="c-animate-bounce c-animate-repeat-3">Bounces three times</div>
```

**Available animations**

fade-in, fade-out, fade-in-up, fade-in-down, fade-in-left, fade-in-right, fade-out-up, fade-out-down, slide-up, slide-down, slide-left, slide-right, slide-out-up, slide-out-down, slide-out-left, slide-out-right, scale-in, scale-out, scale-in-x, scale-in-y, zoom-in, zoom-out, flip-x, flip-y, rotate-in, rotate-out, spin, spin-reverse, spin-slow, spin-fast, ping, pulse, pulse-scale, bounce, bounce-x, shake, shake-y, wiggle, heartbeat, float, float-x, swing, rubber-band, jello, tada, glow, glow-text, ripple, draw, morph, flip-card, roll-in, drop-in, blur-in, blur-out, progress, blink, skeleton, shimmer, typewriter

---

## Form Components

All form components are styled through CSS only — no JavaScript, no dependencies.

```html
<!-- Text input -->
<div class="c-form-group">
  <label class="c-label c-label-required">Full Name</label>
  <input type="text" class="c-input" placeholder="John Doe" />
  <span class="c-form-hint">Enter your full legal name.</span>
</div>

<!-- Input states -->
<input class="c-input" placeholder="Default" />
<input class="c-input c-input-error" placeholder="Error" />
<input class="c-input c-input-success" placeholder="Success" />

<!-- Input sizes -->
<input class="c-input c-input-sm" placeholder="Small" />
<input class="c-input" placeholder="Default" />
<input class="c-input c-input-lg" placeholder="Large" />

<!-- Textarea -->
<textarea class="c-textarea" rows="5" placeholder="Your message"></textarea>

<!-- Select -->
<select class="c-select">
  <option>Choose an option</option>
  <option>Option One</option>
  <option>Option Two</option>
</select>

<!-- Select sizes -->
<select class="c-select c-select-sm">
  ...
</select>
<select class="c-select c-select-lg">
  ...
</select>

<!-- Select states -->
<select class="c-select c-select-error">
  ...
</select>
<select class="c-select c-select-success">
  ...
</select>

<!-- Checkbox -->
<label class="c-flex c-items-center c-gap-2">
  <input type="checkbox" />
  <span class="c-text-sm">I agree to the terms</span>
</label>

<!-- Radio -->
<label class="c-flex c-items-center c-gap-2">
  <input type="radio" name="plan" />
  <span class="c-text-sm">Starter</span>
</label>

<!-- Range slider -->
<input type="range" min="0" max="100" />

<!-- Input group -->
<div class="c-input-group">
  <span class="c-input-addon">https://</span>
  <input type="text" class="c-input" placeholder="yoursite.com" />
  <span class="c-input-addon">.com</span>
</div>

<!-- Buttons -->
<button class="c-btn c-btn-primary">Primary</button>
<button class="c-btn c-btn-secondary">Secondary</button>
<button class="c-btn c-btn-outline">Outline</button>
<button class="c-btn c-btn-ghost">Ghost</button>
<button class="c-btn c-btn-danger">Danger</button>
<button class="c-btn c-btn-success">Success</button>

<!-- Button sizes -->
<button class="c-btn c-btn-primary c-btn-xs">XSmall</button>
<button class="c-btn c-btn-primary c-btn-sm">Small</button>
<button class="c-btn c-btn-primary">Default</button>
<button class="c-btn c-btn-primary c-btn-lg">Large</button>
<button class="c-btn c-btn-primary c-btn-xl">XLarge</button>
<button class="c-btn c-btn-primary c-btn-full">Full Width</button>

<!-- Loading state -->
<button class="c-btn c-btn-primary c-btn-loading">Processing...</button>

<!-- Disabled -->
<button class="c-btn c-btn-primary" disabled>Disabled</button>
```

---

## Scroll Utilities

```html
<!-- Smooth scroll behavior -->
<html class="c-scroll-smooth">
  <!-- Horizontal scroll snap carousel -->
  <div class="c-flex c-snap-x c-overflow-x-auto c-scrollbar-none c-gap-4">
    <div
      class="c-snap-start c-flex-shrink-0 c-w-80 c-rounded-xl c-bg-gray-100 c-p-6"
    >
      Slide 1
    </div>
    <div
      class="c-snap-start c-flex-shrink-0 c-w-80 c-rounded-xl c-bg-gray-100 c-p-6"
    >
      Slide 2
    </div>
    <div
      class="c-snap-start c-flex-shrink-0 c-w-80 c-rounded-xl c-bg-gray-100 c-p-6"
    >
      Slide 3
    </div>
  </div>

  <!-- Vertical scroll with custom scrollbar -->
  <div class="c-overflow-y-auto c-scrollbar-thin c-max-h-64">
    Long scrollable content...
  </div>

  <!-- Hide scrollbar entirely -->
  <div class="c-overflow-x-auto c-scrollbar-none">
    Horizontal scroll without visible scrollbar
  </div>

  <!-- Overscroll containment -->
  <div class="c-overscroll-contain c-overflow-y-auto">
    Scroll stops at the boundary
  </div>
</html>
```

---

## Print Utilities

```html
<!-- Hide in print -->
<nav class="c-print-hidden">Site navigation</nav>
<aside class="c-print-hidden">Sidebar ads</aside>

<!-- Show only in print -->
<div class="c-print-only">Printed on: June 2026 — Confidential</div>

<!-- Page break control -->
<section class="c-print-break-inside-avoid">
  This section will not split across pages
</section>
<div class="c-print-break-before">Starts on a new page</div>
<div class="c-print-break-after">Forces a new page after</div>

<!-- Preserve background colors in print -->
<div class="c-print-color-adjust-exact c-bg-primary-500">
  Background prints accurately
</div>
```

---

## Font Plugin

FluxGrid CSS ships a separate optional font module that provides 15 Google Font families through simple utility classes. The core package loads zero fonts — the font module must be explicitly imported.

### Import

```html
<!-- HTML -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@datafluxgrid/fluxgrid-css/src/css/fonts.css"
/>
```

```js
// React / Vite
import "@datafluxgrid/fluxgrid-css/src/css/fonts.css";
```

### Available fonts

```html
<h1 class="c-font-poppins c-font-bold">Heading in Poppins Bold</h1>
<p class="c-font-inter c-font-regular">Body text in Inter Regular</p>
<code class="c-font-fira-code">const x = 10;</code>
<h2 class="c-font-playfair c-font-semibold">Editorial heading</h2>
<p class="c-font-dm-sans">Clean modern paragraph</p>
```

**Font families:** inter, poppins, roboto, montserrat, open-sans, lato, nunito, merriweather, playfair, fira-code, dm-sans, space-grotesk, outfit, jakarta, geist

**Font weights:** thin (100), extralight (200), light (300), regular (400), medium (500), semibold (600), bold (700), extrabold (800), black (900)

```html
<h1 class="c-font-montserrat c-font-black">Black weight heading</h1>
<p class="c-font-nunito c-font-light c-font-italic">Light italic paragraph</p>
```

---

## Contributing

Contributions are welcome. Please follow the process below to maintain code quality and consistency.

1. Fork the repository on GitHub
2. Create a feature branch from `dev` — `git checkout -b feature/your-feature`
3. Write your changes following the existing naming conventions and `c-` prefix pattern
4. Commit with a clear message — `git commit -m "feat: add c-grid-dense utility"`
5. Push to your fork — `git push origin feature/your-feature`
6. Open a Pull Request targeting the `dev` branch, not `main`

Direct pushes to `main` are not accepted. All changes go through Pull Requests and are reviewed before merging into the release branch.

---

## License

MIT License. Copyright Datafluxgrid.

See [LICENSE](https://github.com/vimalkrml/Dev-Template/blob/main/LICENSE) for the full text.

---

Built and maintained by [Vimal K R](https://github.com/vimalkrml) — [Datafluxgrid](https://www.linkedin.com/company/datafluxgrid)
