# Callout
Callout is a versatile, pre-styled container used to highlight key pieces of content in a visually distinct way.

## Overview
Callouts can be used multiple times on a page and are flexible enough to support various content arrangements. They are ideal for:

- Highlighting a set of products alongside a product list.
- Displaying feature overviews or promotional content.
- Structuring elements such as accordions or other grouped content.

Callouts include built-in containers for icons, taglines, titles, subtitles, and custom body content, making it both powerful and easy to extend.

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
A callout is composed of the following containers, projected in the order listed:

- **`<daff-callout>`**: Parent container that supports content projection and includes structural styling.
- **`[daffCalloutIcon]`**: Displays a visual or branding element. Avoid using this for interactive or actionable icons.
- **`[daffCalloutTagline]`**: Short, memorable phrase that complements the title and provides quick context.
- **`[daffCalloutTitle]`**: Defines the primary title, applied to a heading tag (`<h*>`).
- **`[daffCalloutSubtitle]`**: Secondary descriptive text displayed beneath the title.
- **`[daffCalloutBody]`**: Flexible wrapper for custom or additional components. It's unstyled except for spacing and should only be used once per callout.

```html
<daff-callout>
  <div daffCalloutIcon></div>
  <div daffCalloutTagline></div>
  <h2 daffCalloutTitle></h2>
  <p daffCalloutSubtitle></p>
  <div daffCalloutBody></div>
</daff-callout>
```

## Colors
Use the `color` property to change the background of a callout.

<design-land-example-viewer-container example="callout-theming"></design-land-example-viewer-container>

## Text alignment
Control callout-specific text alignment with the `textAlignment` property. It defaults to `left` and **does not** affect `[daffCalloutBody]` content or nested elements.

<design-land-example-viewer-container example="callout-text-alignment"></design-land-example-viewer-container>

## Compact
Use the `compact` property on callout to reduce padding and suit UIs with tighter spacing requirements.

<design-land-example-viewer-container example="compact-callout"></design-land-example-viewer-container>

## Examples

### Callout with two columns
Callouts are flexible enough to support custom grid layouts for more complex arrangements:

<design-land-example-viewer-container example="callout-with-grid"></design-land-example-viewer-container>