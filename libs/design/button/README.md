# Button
The button is used for making actions apparent to the end-user. It can be used to navigate users to a different page or to perform an action. Buttons can contain text, icons, or both.

## Overview
Native `<button>` or `<a>` elements are always used in order to provide an easy, accessible experience for users.
- `<a>` should be used for interactions that will navigate users to a new page or to a different target on the same page.
- `<button>` should be used when a clickable action is performed within the same page.

## Types
- `daff-button` - Rectangular contained button with background color
- `daff-icon-button` - Icon button used with icon fonts
- `daff-raised-button` - Rectangular contained button with background color and elevation
- `daff-stroked-button` - Rectangular outlined button with no background color

### Basic Button
<design-land-example-viewer-container example="basic-button"></design-land-example-viewer-container>

### Stroked Button
<design-land-example-viewer-container example="stroked-button"></design-land-example-viewer-container>

> `black`, `white`, and `theme` should be used with caution to ensure that there is sufficient contrast.

### Raised Button
<design-land-example-viewer-container example="raised-button"></design-land-example-viewer-container>

### Icon Button
<design-land-example-viewer-container example="icon-button"></design-land-example-viewer-container>

> `black`, `white`, and `theme` should be used with caution to ensure that there is sufficient contrast.

### Underline Button
<design-land-example-viewer-container example="underline-button"></design-land-example-viewer-container>

## Usage

### Within a standalone component
To use button in a standalone component, import it directly into your custom component. Buttons can be imported individually or all together by using `DAFF_BUTTON_COMPONENTS`:

```ts
@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  standalone: true,
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
The size of a button can be changed by using the `size` property. The size of all the button variants will default to `md` if no size is defined. This can be changed to one of the supported sizes.

Supported Sizes: `sm | md | lg`

<design-land-example-viewer-container example="sizeable-button"></design-land-example-viewer-container>

## Theming
The default color of a button is light gray, but it can be updated to one of the supported colors by using the `color` property.

Supported colors: `primary | secondary | tertiary | black | white | theme | theme-contrast`

> For select button types, `black` and `white` should be used on a darker background in order to have sufficient contrast.

## Status Indicators
Buttons with status indicators can be used to distinguish what type of action it performs and its importance compared to other buttons in the same context.

Supported statuses: `warn | critical | success`

<design-land-example-viewer-container example="statusable-button"></design-land-example-viewer-container>

## Accessbility
Daffodil uses native `<a>` and `<button>` HTML elements to ensure an accessible experience by default. The `<button>` element should be used when a clickable action is performed within the same page. The `<a>` element should be used to navigate users to a new page or to a different target on the same page.

Buttons and links containing only icons (`<daff-icon-button>`) need to be given meaningful labels using `aria-label` or `aria-labelledby`.