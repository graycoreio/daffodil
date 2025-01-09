# Navbar
Navbar is a flexible and extensible, horizontally stacked component intended for major blocks of navigation links.

## Overview
The navbar contains minimal layout styles, allowing the content within it to be fluid and customizable. It utilizes the `flex` display and is customizable with all the flexbox properties. It's required to be used with the native HTML `<nav>` element to ensure an accessible experience by default.

## Basic Navbar
<design-land-example-viewer-container example="basic-navbar"></design-land-example-viewer-container>

## Usage

### Within a standalone component
To use navbar in a standalone component, import `DAFF_NAVBAR_COMPONENTS` directly into your custom component:

```ts
@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  standalone: true,
  imports: [
    DAFF_NAVBAR_COMPONENTS,
  ],
})
export class CustomComponent {}
```

### Within a module (deprecated)
To use navbar in a module, import `DaffNavbarModule` into your custom module:

```ts
import { NgModule } from '@angular/core';

import { DaffNavbarModule } from '@daffodil/design/navbar';

@NgModule({
	declarations: [
    CustomComponent,
  ],
  exports: [
    CustomComponent,
  ],
  imports: [
    DaffNavbarModule,
  ],
})
export class CustomComponentModule { }
```

> This method is deprecated. It's recommended to update all custom components to standalone.

## Theming
The default background color of a navbar is light gray, but it can be updated to one of the supported colors by using the `color` property.

Supported colors: `primary | secondary | tertiary | black | white | theme | theme-contrast`

<design-land-example-viewer-container example="navbar-theming"></design-land-example-viewer-container>

## Contained Navbar
A navbar can be contained to a specific width by using the [Container](/libs/design/container/README.md) component. The layout styles set on the navbar will automatically be passed down to the container.

<design-land-example-viewer-container example="contained-navbar"></design-land-example-viewer-container>

## Raised Navbar
The raised property adds elevation to a navbar. To enable it, set the `raised` property on `<nav daff-navbar>`.

<design-land-example-viewer-container example="raised-navbar"></design-land-example-viewer-container>

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