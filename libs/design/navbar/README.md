# Navbar
Navbar is a flexible and extensible component that provides a container for navigation elements.

## Overview
The navbar contains minimal layout styles, allowing the content within it to be fluid and customizable. It utilizes the `flex` display and is customizable with all the flexbox properties. It's required to be used with the native HTML `<nav>` element to ensure an accessible experience by default.

<daff-docs-example-viewer example="basic-navbar"></daff-docs-example-viewer>

## Usage

Import`DAFF_NAVBAR_COMPONENTS` into your component:

```ts
import { DAFF_NAVBAR_COMPONENTS } from '@daffodil/design/navbar';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_NAVBAR_COMPONENTS,
  ],
})
export class CustomComponent {}
```

> **Deprecation notice:**
> 
> `DaffNavbarModule` is deprecated. Use the standalone component imports instead.

## Anatomy
A navbar is a directive applied to a native `<nav>` element:

```html
<nav daff-navbar>
  <!-- navigation items -->
</nav>
```

- **`nav[daff-navbar]`**: The directive applied to a native `<nav>` element. Provides flexbox layout and styling for navigation content.

## Features

### Elevation
Use the `elevated` property to add a shadow effect to the navbar.

<daff-docs-example-viewer example="elevated-navbar"></daff-docs-example-viewer>

### Blurred background
Use the `blurred` property to add a semi-transparent background effect to the navbar, creating a frosted glass appearance.

<daff-docs-example-viewer example="blurred-navbar"></daff-docs-example-viewer>

Both `elevated` and `blurred` can be combined for a layered effect:

<daff-docs-example-viewer example="blurred-elevated-navbar"></daff-docs-example-viewer>

### Contained navbar
A navbar can be contained to a specific width by using the [container](/libs/design/container/README.md) component. The layout styles set on the navbar will automatically be passed down to the container.

<daff-docs-example-viewer example="contained-navbar"></daff-docs-example-viewer>

## Accessibility

### Daffodil provides
- Enforces the use of the native `<nav>` element so each navbar is recognized as a navigation landmark by assistive technology

### Developer responsibilities
- If more than one navbar is used on the page, give each one a meaningful `aria-label` to distinguish them

```html
<nav daff-navbar aria-label="main navigation">
<!--  navigation items -->
</nav>

<footer>
  <nav daff-navbar aria-label="footer navigation">
  <!--  navigation items -->
  </nav>
</footer>
```