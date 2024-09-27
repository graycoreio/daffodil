# Callout
Callout is a versatile component that can be used to easily highlight a piece of content.

## Overview
Callouts can be used multiple times on a page. It's a flexible and extensible component that includes pre-styled content containers. It can be used alongside a product list to highlight a set of products, quickly lay out an accordion, showcase a set of features, etc.

## Usage

### Within a standalone component
To use callout in a standalone component, import it directly into your custom component:

```ts
@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  standalone: true,
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


## Supported Content Types
A `<daff-callout>` supports transclusion of any content and includes stylized `icon`, `tagline`, `title`, `subtitle`, and `body` content containers.

### Icon
`[daffCalloutIcon]` is intended for visual or branding reinforcement. It should not be used for actionable icons.

### Tagline
Callout taglines are used by adding `[daffCalloutTagline]` to a `<p>` tag. It's intended to supplement the title by providing a short, memorable description.

### Title
Callout titles are used by adding `[daffCalloutTitle]` to a `<h*>` tag.

### Subtitle
Callout subtitles are used by adding `[daffCalloutSubtitle]` to a `<p>` tag.

### Body
`[daffCalloutBody]` is a wrapper container that can be used to place all additional components and content within a `<daff-callout>` and should only be used once. The body container allows for a ton of control and customization because it's not affected by any of callout's properties and only serves as a wrapping and spacing container.

## Theming
The default background color of a callout is light gray, but it can be updated to one of the supported colors by using the `color` property.

Supported colors: `primary | secondary | tertiary | black | white | theme | theme-contrast`

<design-land-example-viewer-container example="callout-theming"></design-land-example-viewer-container>

## Text Alignment
Align callout-specific text with the `textAlignment` property. `textAlignment` will not cascade the alignment styles down to `[daffCalloutBody]` or any additional components or elements that is placed inside of a callout. `textAlignment` is set to `left` by default.

Supported alignments: `left | center | right`

<design-land-example-viewer-container example="callout-text-alignment"></design-land-example-viewer-container>

## Compact Callouts
Callouts are available in a `compact` mode, which decreases the overall padding of the callout container to suit UIs that require less negative space. To enable the mode, set the `compact` property on `<daff-callout>`.

<design-land-example-viewer-container example="compact-callout"></design-land-example-viewer-container>

## Gridded Callouts
Callouts are flexible enough to support grids within them.

### Callout with Two Columns
<design-land-example-viewer-container example="callout-with-grid"></design-land-example-viewer-container>

## Layout
The `layout` property is deprecated and replaced by the [`textAlignment`](#text-alignment) property.

## Size
The `size` property is deprecated and replaced by the [`compact`](#compact-callouts) property.
