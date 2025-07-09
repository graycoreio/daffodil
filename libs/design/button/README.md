# Button
Buttons make actions apparent to users and can navigate to different pages or perform actions. They can display text, icons, or both.

## Overview
Button supports five variants that change its visual style, each applied as an attribute:

| Attribute | Description |
| --------- | ----------- |
| `daff-button` | Rectangular button with background color |
| `daff-flat-button`| Rectangular button with no outline or background color |
| `daff-icon-button` | Icon only button used with icon fonts |
| `daff-stroked-button` | Rectangular button with oultline, no background color |
| `daff-underline-button` | Text button with underline styling |

**Basic button**
<design-land-example-viewer-container example="basic-button"></design-land-example-viewer-container>

**Flat button**
<design-land-example-viewer-container example="flat-button"></design-land-example-viewer-container>

**Stroked button**
<design-land-example-viewer-container example="stroked-button"></design-land-example-viewer-container>

> `dark`, `light`, and `theme` should be used with caution to ensure that there is sufficient contrast.

**Icon button**
<design-land-example-viewer-container example="icon-button"></design-land-example-viewer-container>

> `dark`, `light`, and `theme` should be used with caution to ensure that there is sufficient contrast.

**Underline button**
<design-land-example-viewer-container example="underline-button"></design-land-example-viewer-container>

## When to use
Native `<button>` or `<a>` elements should always be used in order to provide an easy, accessible experience for users.

- Use `<a>` for navigation to new pages or different sections.
- Use `<button>` for actions performed within the same page.

## Usage

### Within a standalone component
To use button in a standalone component, import each button type directly into your custom component.

Available imports:
- `DAFF_BASIC_BUTTON_COMPONENTS`
- `DAFF_FLAT_BUTTON_COMPONENTS`
- `DAFF_ICON_BUTTON_COMPONENTS`
- `DAFF_STROKED_BUTTON_COMPONENTS`
- `DAFF_UNDERLINE_BUTTON_COMPONENTS`
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

```html
<button daff-button>
  <fa-icon [faIcon]="faUser" daffPrefix></fa-icon>
  Button label
</button>

<button daff-button>
  Button label
  <fa-icon [faIcon]="faArrowRight" daffPrefix></fa-icon>
</button>
```

## Sizes
Use the `size` property to control button dimensions. The default size is `md`.

<design-land-example-viewer-container example="sizeable-button"></design-land-example-viewer-container>

## Colors
Use the `color` property to change the color of a button.

> Note: `dark`, `light`, and `theme` should be used on appropriate backgrounds for sufficient contrast.

## Status indicators
Status indicators help users understand the type of action a button performs and its importance relative to other buttons in the same context. Use the `status` property to convey different semantic meanings.

<design-land-example-viewer-container example="statusable-button"></design-land-example-viewer-container>

## Elevation
Add shadows to buttons with the `elevated` property.

> Note: The `elevated` property is not supported for flat, icon, and underline buttons.

<design-land-example-viewer-container example="elevated-button"></design-land-example-viewer-container>

## Accessbility
Daffodil uses native `<a>` and `<button>` HTML elements to ensure an accessible experience by default.

- Use `<a>` for navigation to new pages or different sections.
- Use `<button>` for actions performed within the same page.
- Icon only buttons (`<daff-icon-button>`) need to be given meaningful labels using `aria-label` or `aria-labelledby`.