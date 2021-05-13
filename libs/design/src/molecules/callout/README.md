# Callout
`DaffCalloutComponent` is a versatile component that can be used to easily highlight a piece of content. It supports transclusion of any content and includes predefined `tagline`, `title`, and `subtitle` styles.

## Use Cases
1. It can be used alongside a product list to highlight a set of products.
2. It can be used to quickly lay out an accordion.
3. It can be used to showcase a set of features.

## Supported Content Types
A `<daff-callout>` transcludes:
- `[daffCalloutTagline]` - Callout Tagline
- `[daffCalloutTitle]` - Callout Title
- `[daffCalloutSubtitle]` - Callout Subtitle0
- Any additional components

## Theming
The default background color of a callout is light gray, but it can be updated to one of the supported colors by using the `color` property.

Supported colors: `primary | secondary | tertiary | black | white | theme | theme-contrast`

## Text Alignment
Align callout-specific text with the `textAlignment` property. `textAlignment` will not cascade the alignment styles down to any additional components or elements that is placed inside of a callout.

Supported alignments: `left | center | right`
<design-land-example-viewer-container example="callout-text-alignment"></design-land-example-viewer-container>

## Gridded Callout
Callouts are flexible enough to support grids within them.

### Two Column Grid Callout
<design-land-example-viewer-container example="callout-with-grid"></design-land-example-viewer-container>

## Layout
The `layout` property will be deprecated in v1.0.0

## Size
The `size` property will be deprecated in v1.0.0. The `compact` value will be replaced by the `DaffCompactable` interface.
