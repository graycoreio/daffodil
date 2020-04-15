# Callout
`DaffCalloutComponent` is a versatile component that can be used to easily highlight a piece of content. It supports transcluding any content and optionally including a predefined `title` and `subtitle`.

## Use Cases
1. It can be used alongside a product list to highlight a set of products.
2. It can be used to quickly lay out an accordion.
3. It can be used to showcase a set of features.

## Supported Content Types
A `<daff-callout>` transcludes:
- `[daffCalloutTitle]`
- `[daffCalloutSubtitle]`
- Any additional components

### Title
- Callout title is used by adding `[daffCalloutTitle]` to any tag.

### Subtitle
- Callout subtitle is used by adding `[daffCalloutSubtitle]` to any tag.

## Colors
The color of a callout can be changed by using the `color` property. By default, the color of a callout is `gray`. This can be changed to one of the supported colors. Supported colors: `primary`, `secondary`, `tertiary`, `theme`, `theme-contrast`, `black`, and `white`

## Layout
- The `layout` property will be deprecated in v1.0.0

## Size
- The `size` property will be deprecated in v1.0.0

## Usage
```
<daff-callout color="primary">
  <h3 daffCalloutTitle>Callout Title</h3>
  <p daffCalloutSubtitle>Callout subtitle</p>
</daff-callout>
```
