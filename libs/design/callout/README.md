# Callout
A callout is a versatile, pre-styled container used to highlight key pieces of content in a visually distinct way.

## Overview
Callouts help draw attention to important information and can be used multiple times on a page. They're flexible enough to support various content arrangements and include built-in containers for icons, taglines, titles, subtitles, and custom body content.

<daff-docs-example-viewer example="basic-callout"></daff-docs-example-viewer>

## Best practices

**When to use**
- Highlighting promotional content or special offers
- Featuring product collections or categories
- Creating visually distinct content sections
- Displaying feature overviews or benefits

## Usage

### Within a standalone component
Import `DAFF_CALLOUT_COMPONENTS` into your component:

```ts
import { DAFF_CALLOUT_COMPONENTS } from '@daffodil/design/callout';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_CALLOUT_COMPONENTS,
  ],
})
export class CustomComponent {}
```

### Within a module (deprecated)
To use callout in a module, import `DaffCalloutModule` into your custom module:

```ts
import { NgModule } from '@angular/core';
import { DaffCalloutModule } from '@daffodil/design/callout';
import { CustomComponent } from './custom.component';

@NgModule({
	declarations: [
    CustomComponent,
  ],
  exports: [
    CustomComponent,
  ],
  imports: [
    DaffCalloutModule,
  ],
})
export class CustomComponentModule { }
```

> This method is deprecated. It's recommended to update all custom components to standalone.

## Anatomy
A callout is composed of a wrapper, icon, tagline, title, subtitle, and body, displayed in the order listed:

```html
<daff-callout>
  <div daffCalloutIcon>
    <fa-icon [icon]="faExclamation"></fa-icon>
  </div>
  <div daffCalloutTagline>Limited Time Offer</div>
  <h2 daffCalloutTitle>Special Sale</h2>
  <p daffCalloutSubtitle>Save up to 50% on selected items</p>
  <div daffCalloutBody>
    <button daff-button>Shop Now</button>
  </div>
</daff-callout>
```

- **`<daff-callout>`**: The wrapper component that holds all callout content.
- **`[daffCalloutIcon]`**: Displays a visual or branding element. Avoid using for interactive or actionable icons.
- **`[daffCalloutTagline]`**: Short, memorable phrase that provides quick context.
- **`[daffCalloutTitle]`**: The primary heading text. Applied to heading elements (`<h1>`, `<h2>`, etc.).
- **`[daffCalloutSubtitle]`**: Secondary descriptive text displayed beneath the title.
- **`[daffCalloutBody]`**: Flexible container for additional content. It's unstyled except for spacing and **should only be used once per callout**.

## Features

### Colors
Use the `color` property to change the background of a callout.

<daff-docs-example-viewer example="callout-theming"></daff-docs-example-viewer>

### Text alignment
Control callout-specific text alignment with the `textAlignment` property. It defaults to `left` and **does not** affect content placed within `[daffCalloutBody]`.

<daff-docs-example-viewer example="callout-text-alignment"></daff-docs-example-viewer>

### Compact
Use the `compact` property on callout to reduce padding and suit UIs with tighter spacing requirements.

<daff-docs-example-viewer example="compact-callout"></daff-docs-example-viewer>

## Examples

### Callout with two columns
Callouts are flexible enough to support custom grid layouts for more complex arrangements:

<daff-docs-example-viewer example="callout-with-grid"></daff-docs-example-viewer>