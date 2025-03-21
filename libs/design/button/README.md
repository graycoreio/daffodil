# Button
Buttons are used to make actions apparent to the end user. It can be used to navigate users to a different page or to perform an action. Buttons can contain text, icons, or both.

## Overview
Native `<button>` or `<a>` elements are always used in order to provide an easy, accessible experience for users.

- `<a>` should be used for interactions that will navigate users to a new page or to a different target on the same page.
- `<button>` should be used when a clickable action is performed within the same page.

## Types
Button supports five types that change its visual style.

- `daff-button` - Rectangular contained button with background color
- `daff-flat-button` - Rectangular contained button with no outline or background color
- `daff-icon-button` - Icon button used with icon fonts
- `daff-raised-button` - Rectangular contained button with background color and elevation
- `daff-stroked-button` - Rectangular outlined button with no background color

### Basic Button
<design-land-example-viewer-container example="basic-button"></design-land-example-viewer-container>

### Flat Button
<design-land-example-viewer-container example="flat-button"></design-land-example-viewer-container>

### Stroked button
<design-land-example-viewer-container example="stroked-button"></design-land-example-viewer-container>

> `black`, `white`, and `theme` should be used with caution to ensure that there is sufficient contrast.

### Raised button
<design-land-example-viewer-container example="raised-button"></design-land-example-viewer-container>

### Icon button
<design-land-example-viewer-container example="icon-button"></design-land-example-viewer-container>

> `black`, `white`, and `theme` should be used with caution to ensure that there is sufficient contrast.

### Underline button
<design-land-example-viewer-container example="underline-button"></design-land-example-viewer-container>

## Usage

### Within a standalone component
To use button in a standalone component, import each button type directly into your custom component. Buttons can be imported individually or all together by using `DAFF_BUTTON_COMPONENTS`:

```ts
import { DaffButtonComponent } from '@daffodil/design/button';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DaffButtonComponent,
  ],
})
export class CustomComponent {}
```

### Within a module (deprecated)
To use button in a module, import `DaffButtonModule` into your custom module:

```ts
import { NgModule } from '@angular/core';
import { DaffButtonModule } from '@daffodil/design/button';
import { CustomComponent } from './custom.component';

@NgModule({
	declarations: [
    CustomComponent,
  ],
  exports: [
    CustomComponent,
  ],
  imports: [
    DaffButtonModule,
  ],
})
export class CustomComponentModule { }
```

> This method is deprecated. It's recommended to update all custom components to standalone.

## Sizes
Use the `size` property to specify a button size. Setting this property will change the height and padding of a button. The size of all variants will default to `md` if none is defined.

<design-land-example-viewer-container example="sizeable-button"></design-land-example-viewer-container>

## Theming
Use the `color` property to change the color of a button. The default color is light gray.

> For select button types, `black` and `white` should be used on a darker background in order to have sufficient contrast.

## Status indicators
Buttons with status indicators can be used to distinguish what type of action it performs and its importance compared to other buttons in the same context. Use the `status` property to change the status.

<design-land-example-viewer-container example="statusable-button"></design-land-example-viewer-container>

## Icon support
An icon can be rendered on either side of the button text content with the `daffPrefix` and `daffSuffix` selectors.

```html
<button daff-button>
  <fa-icon [faIcon]="faUser" daffPrefix></fa-icon>
  Button Content
  <fa-icon [faIcon]="faUser" daffSuffix></fa-icon>
</button>
```

## Accessbility
Daffodil uses native `<a>` and `<button>` HTML elements to ensure an accessible experience by default.

- The `<button>` element should be used when a clickable action is performed within the same page.
- The `<a>` element should be used to navigate users to a new page or to a different target on the same page.

Buttons and links containing only icons (`<daff-icon-button>`) need to be given meaningful labels using `aria-label` or `aria-labelledby`.