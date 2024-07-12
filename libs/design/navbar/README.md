# Navbar
Navbar is a flexible and extensible, horizontally stacked component intended for major blocks of navigation links.

## Overview
The navbar contains minimal layout styles, allowing the content within it to be fluid and customizable. It utilizes the `flex` display and is customizable with all the flexbox properties. It's required to be used with the native HTML `<nav>` element to ensure an accessible experience by default.

## Basic Navbar
<daff-docs-example-viewer-container-ce example="basic-navbar"></daff-docs-example-viewer-container-ce>

## Theming
The default background color of a navbar is light gray, but it can be updated to one of the supported colors by using the `color` property.

Supported colors: `primary | secondary | tertiary | black | white | theme | theme-contrast`

<daff-docs-example-viewer-container-ce example="navbar-theming"></daff-docs-example-viewer-container-ce>

## Contained Navbar
A navbar can be contained to a specific width by using the [Container](/libs/design/src/atoms/container/README.md) component. The layout styles set on the navbar will automatically be passed down to the container.

<daff-docs-example-viewer-container-ce example="contained-navbar"></daff-docs-example-viewer-container-ce>

## Raised Navbar
The raised property adds elevation to a navbar. To enable it, set the `raised` property on `<nav daff-navbar>`.

<daff-docs-example-viewer-container-ce example="raised-navbar"></daff-docs-example-viewer-container-ce>

## Accessibility
Daffodil enforces the usage of the native `<nav>` HTML element to ensure an accessible experience by default. If more than one navbar is used, every navbar should be given a meaningful label by using the `aria-labelledby` attribute.

### Example
```html
<nav daff-navbar aria-labelledby="main-navigation">
<!--  navigation items -->
</nav>

<footer>
  <nav daff-navbar aria-labelledby="footer-navigation">
  <!--  navigation items -->
  </nav>
</footer>
```