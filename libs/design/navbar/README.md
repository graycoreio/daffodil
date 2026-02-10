# Navbar
Navbar is a flexible and extensible component that provides a container for navigation elements.

## Overview
The navbar contains minimal layout styles, allowing the content within it to be fluid and customizable. It utilizes the `flex` display and is customizable with all the flexbox properties. It's required to be used with the native HTML `<nav>` element to ensure an accessible experience by default.

<design-land-example-viewer-container example="basic-navbar"></design-land-example-viewer-container>

## Usage

### Within a standalone component
To use navbar in a standalone component, import `DAFF_NAVBAR_COMPONENTS` directly into your custom component:

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

### Within a module (deprecated)
To use navbar in a module, import `DaffNavbarModule` into your custom module:

```ts
import { NgModule } from '@angular/core';
import { DaffNavbarModule } from '@daffodil/design/navbar';
import { CustomComponent } from './custom.component';

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

## Features

### Elevation
Use the `elevated` property to add a shadow effect to the navbar.

<design-land-example-viewer-container example="elevated-navbar"></design-land-example-viewer-container>

### Blurred background
Use the `blurred` property to add a semi-transparent background effect to the navbar, creating a frosted glass appearance.

<design-land-example-viewer-container example="blurred-navbar"></design-land-example-viewer-container>

Both `elevated` and `blurred` can be combined for a layered effect:

```html
<nav daff-navbar [elevated]="true" [blurred]="true">
  <!-- navigation items -->
</nav>
```

### Contained navbar
A navbar can be contained to a specific width by using the [container](/libs/design/container/README.md) component. The layout styles set on the navbar will automatically be passed down to the container.

<design-land-example-viewer-container example="contained-navbar"></design-land-example-viewer-container>

## Accessibility
Daffodil enforces the usage of the native `<nav>` HTML element to ensure an accessible experience by default. If more than one navbar is used, every navbar should be given a meaningful label by using the `aria-label` attribute.

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