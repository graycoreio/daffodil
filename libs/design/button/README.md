# Button
Buttons make actions apparent to users and can navigate to different pages or perform actions. They can display text, icons, or both.

## Overview
Button supports four variants that change its visual style, each applied as an attribute:

| Attribute | Description |
| --------- | ----------- |
| `daff-button` | Rectangular button with background color |
| `daff-flat-button`| Rectangular button with no outline or background color |
| `daff-icon-button` | Icon only button used with icon fonts |
| `daff-stroked-button` | Rectangular button with oultline, no background color |

Native `<button>` or `<a>` elements should always be used in order to provide an easy, accessible experience for users.

- Use `<a>` for navigation to new pages or different sections.
- Use `<button>` for actions performed within the same page.

**Basic button**
<daff-docs-example-viewer example="basic-button"></daff-docs-example-viewer>

**Flat button**
<daff-docs-example-viewer example="flat-button"></daff-docs-example-viewer>

**Stroked button**
<daff-docs-example-viewer example="stroked-button"></daff-docs-example-viewer>

> `dark`, `light`, and `theme` should be used with caution to ensure that there is sufficient contrast.

**Icon button**
<daff-docs-example-viewer example="icon-button"></daff-docs-example-viewer>

> `dark`, `light`, and `theme` should be used with caution to ensure that there is sufficient contrast.

## Usage

### Within a standalone component
To use button in a standalone component, import each button type directly into your custom component.

Available imports:
- `DAFF_BASIC_BUTTON_COMPONENTS`
- `DAFF_FLAT_BUTTON_COMPONENTS`
- `DAFF_ICON_BUTTON_COMPONENTS`
- `DAFF_STROKED_BUTTON_COMPONENTS`
- `DAFF_BUTTON_COMPONENTS` (all types)

```ts
import { DAFF_BASIC_BUTTON_COMPONENTS } from '@daffodil/design/button';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_BASIC_BUTTON_COMPONENTS,
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

## Anatomy
Buttons should always have a label, unless you are only using an icon that is universally understood and accessible.

### Icon support
An icon can be rendered on either side of the button text content with the `daffPrefix` and `daffSuffix` selectors. Avoid using both simultaneously.

<daff-docs-example-viewer example="button-with-icon"></daff-docs-example-viewer>

## Features

### Colors
Use the `color` property to change the color of a button.

> Note: `dark`, `light`, and `theme` should be used on appropriate backgrounds for sufficient contrast.

### Elevation
Add shadows to buttons with the `elevated` property.

> Note: The `elevated` property is not supported for flat, icon, and underline buttons.

<daff-docs-example-viewer example="elevated-button"></daff-docs-example-viewer>

### Sizes
Use the `size` property to control button dimensions. The default size is `md`.

<daff-docs-example-viewer example="button-sizes"></daff-docs-example-viewer>

### Status indicators
Status indicators help users understand the type of action a button performs and its importance relative to other buttons in the same context. Use the `status` property to convey different semantic meanings.

<daff-docs-example-viewer example="statusable-button"></daff-docs-example-viewer>

## States

### Disabled
Use the `disabled` property to disable a button that shouldn't be actionable. The button will appear faded and won't respond to user interaction.

<daff-docs-example-viewer example="disabled-button"></daff-docs-example-viewer>

### Loading
Use the `loading` property to indicate that an action is being processed. When `loading` is set to `true`, the button displays a spinner.

<daff-docs-example-viewer example="loading-button"></daff-docs-example-viewer>

## Accessbility
Daffodil uses native `<a>` and `<button>` HTML elements to ensure an accessible experience by default.

- Use `<a>` for navigation to new pages or different sections.
- Use `<button>` for actions performed within the same page.
- Icon only buttons (`<daff-icon-button>`) need to be given meaningful labels using `aria-label` or `aria-labelledby`.

## Deprecations
- `<daff-raised-button>` is deprecated and will be removed in v1.0.0. Use the `elevated` property instead.
- `<daff-underline-button>` is deprecated and will be removed in v1.0.0.
