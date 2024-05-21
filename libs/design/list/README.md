# List
List is a flexible component that can be used to display a series of content. It can be modified to support a range of content types.

## Basic List
A `<daff-list>` consists of multiple `<daff-list-item>`s.

<design-land-example-viewer-container example="basic-list"></design-land-example-viewer-container>

## Nvigation List
Use `<daff-nav-list>` for navigation lists. `<daff-list-item>` should be directly added to an anchor tag.

<design-land-example-viewer-container example="nav-list"></design-land-example-viewer-container>

## Multi-line List
For lists that have multiple lines per item, wrap each line appropriately with a heading or paragraph tag.

<design-land-example-viewer-container example="multiline-list"></design-land-example-viewer-container>

## List with Icons
To add an icon to a list item, use the `daffPrefix` or `daffSuffix` attributes for the appropriate placements.

<design-land-example-viewer-container example="icon-list"></design-land-example-viewer-container>

## Deprecation Notice
The `mode` property will be deprecated in v1.0.0.

- `mode="navigation"` is replaced with `<daff-nav-list>`.
- `mode="link"` is replaced with `<daff-nav-list>`.
- `mode="multiline"` is completely deprecated. Multi-line lists will be a natural result of adding multiple lines to a `<daff-list-item>`.