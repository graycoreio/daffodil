# Callout
A callout is a versatile, pre-styled container used to highlight key pieces of content in a visually distinct way.

## Overview
Callouts help draw attention to important information and can be used multiple times on a page. They're flexible enough to support various content arrangements and include built-in containers for icons, taglines, titles, subtitles, and custom body content.

<design-land-example-viewer-container example="basic-callout"></design-land-example-viewer-container>

## Best practices

**When to use**
- Highlighting promotional content or special offers
- Featuring product collections or categories
- Creating visually distinct content sections
- Displaying feature overviews or benefits

## Usage

### Within a standalone component
To use the callout components, import `DAFF_CALLOUT_COMPONENTS` into your custom component:

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
A callout consists of the following components, displayed in the order listed:

### Container
**`<daff-callout>`**: The main wrapper that holds all callout content.

### Icon
**`[daffCalloutIcon]`**: Displays a visual or branding element. Avoid using for interactive or actionable icons.

### Tagline
**`[daffCalloutTagline]`**: Short, memorable phrase that provides quick context.

### Title
**`[daffCalloutTitle]`**: The primary heading text. Applied to heading elements (`<h1>`, `<h2>`, etc.).

### Subtitle
**`[daffCalloutSubtitle]`**: Secondary descriptive text displayed beneath the title.

### Body
**`[daffCalloutBody]`**: Flexible container for additional content. It's unstyled except for spaicng and should only be used once per callout.

### Basic structure
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

## Features

### Colors
Use the `color` property to change the background of a callout.

<design-land-example-viewer-container example="callout-theming"></design-land-example-viewer-container>

### Text alignment
Control callout-specific text alignment with the `textAlignment` property. It defaults to `left` and **does not** affect `[daffCalloutBody]` content or nested elements.

<design-land-example-viewer-container example="callout-text-alignment"></design-land-example-viewer-container>

### Compact
Use the `compact` property on callout to reduce padding and suit UIs with tighter spacing requirements.

<design-land-example-viewer-container example="compact-callout"></design-land-example-viewer-container>

## Examples

### Callout with two columns
Callouts are flexible enough to support custom grid layouts for more complex arrangements:

<design-land-example-viewer-container example="callout-with-grid"></design-land-example-viewer-container>