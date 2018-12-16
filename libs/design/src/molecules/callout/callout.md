# Callout Component
The `daff-callout` component is a versatile component that can be used to easily highlight a piece of content. It supports transcluding any content and optionally including a predefined `title` and `body`.

## Use Cases
1. It can be used alongside a product list to highlight a set of products.
2. It can be used to quickly lay out an accordion.
3. It can be used to showcase a set of features.

## Supported Content Types
A `daff-callout` transcludes:
* `[daff-callout-title]`
* `[daff-callout-body]`
* Any additional components

### Title
* Callout title is used by adding `[daff-callout-title]` to any tag.

### Body
* Callout body is used by adding `<daff-callout-body>` to any tag.

## Colors
* To define a callout background color, add `color="[value]"` to the `daff-callout` tag.
* Values: `primary`, `secondary`, `black`, and `white`

## Sizing
* To define a callout size, add `size="[value]"` to the `daff-callout` tag.
* Values: `small`

## Layout
* To define a callout layout, add `layout="[value]"` to the `daff-callout` tag.
* Values: `centered`

## Usage
```
<daff-callout color="primary" size="small" layout="centered">
  <h3 daff-callout-title>Callout Title</h3>
  <p daff-callout-body>Callout body text</p>
</daff-callout>
```