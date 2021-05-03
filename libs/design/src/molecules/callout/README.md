# Callout
`DaffCalloutComponent` is a versatile component that can be used to easily highlight a piece of content. It supports transclusion of any content and includes predefined `tagline`, `title` and `subtitle` styles.

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
