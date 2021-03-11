# Callout
`DaffCalloutComponent` is a versatile component that can be used to easily highlight a piece of content. It supports transcluding any content and optionally including a predefined, `tagline`, `title` and `subtitle`.

## Use Cases
1. It can be used alongside a product list to highlight a set of products.
2. It can be used to quickly lay out an accordion.
3. It can be used to showcase a set of features.

## Supported Content Types
A `<daff-callout>` transcludes:
- `[daffCalloutTagline]`
- `[daffCalloutTitle]`
- `[daffCalloutSubtitle]`
- Any additional components

### Tagline
Callout headline is used by adding `[daffCalloutTagline]` to any tag.

### Title
Callout title is used by adding `[daffCalloutTitle]` to any tag.

### Subtitle
Callout subtitle is used by adding `[daffCalloutSubtitle]` to any tag.

## Theming
The callout's background color is defined by using the `color` property. By default, the color is set to `theme`. This can be changed to one of the supported colors.

Supported colors: `primary, secondary, tertiary, black, white, theme, and theme-contrast`

## Layout
The `layout` property will be deprecated in v1.0.0

## Size
The `size` property will be deprecated in v1.0.0. The `compact` value will be replaced by the `DaffCompactable` interface.

## Usage
```
<daff-callout color="primary">
  <h3 daffCalloutTitle>Callout Title</h3>
  <p daffCalloutSubtitle>Callout subtitle</p>
</daff-callout>
```
