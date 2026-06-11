# List
A list is a stylized container used to vertically group a series of related content.

## Overview
Lists help organize content into a clear, scannable vertical structure. There are two variants: **default** (`daff-list`) for generic content and **navigation** (`daff-nav-list`) for groups of links.

<daff-docs-example-viewer example="basic-list"></daff-docs-example-viewer>

## Best practices

**When to use**
- Grouping related items that share a common theme or category
- Displaying a series of links for navigation menus

## Usage

Import the list style(s) you need into your component:

Available imports:
- Default lists: `DAFF_LIST_COMPONENTS`
- Navigation lists: `DAFF_NAV_LIST_COMPONENTS`

```ts
import { DAFF_LIST_COMPONENTS } from '@daffodil/design/list';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_LIST_COMPONENTS,
  ],
})
export class CustomComponent {}
```

> **Deprecation notice:**
> 
> `DaffListModule` is deprecated. Use the standalone component imports instead.

## Anatomy
A list is composed of a container and one or more items:

```html
<daff-list>
  <daff-list-item>Content item</daff-list-item>
  <daff-list-item>Content item</daff-list-item>
  <daff-list-item>Content item</daff-list-item>
</daff-list>
```

- **`<daff-list>`** or **`<daff-nav-list>`**: The wrapper component that holds all list items.
- **`<daff-list-item>`**: An individual item within the list. Use the `[daff-list-item]` attribute on `<a>` elements inside a `<daff-nav-list>`.

## Features

### Navigation lists
Use `<daff-nav-list>` with anchor elements to create a list of links. This is useful for menus, sidebars, and footers.

<daff-docs-example-viewer example="nav-list"></daff-docs-example-viewer>

### Multi-line lists
For list items that contain multiple lines of text, use the `[daffListItemTitle]` element to identify the primary title. Additional supporting content can be added using `<div>` or `<p>` elements.

<daff-docs-example-viewer example="multiline-list"></daff-docs-example-viewer>

### Icon support
Use the `[daffPrefix]` element to display a leading visual icon for a list item.

<daff-docs-example-viewer example="icon-list"></daff-docs-example-viewer>

## Accessibility

### Daffodil provides
- `<daff-list>` is assigned `role="list"` to identify a list of items.
- `<daff-nav-list>` is assigned `role="navigation"` to indicate that the list is used for navigation.
- `<daff-list-item>` within a `<daff-list>` is assigned `role="listitem"` to identify a list item contained inside the list.

### Developer responsibilities
- Always provide an accessible label for `<daff-nav-list>` via `aria-label` or `aria-labelledby` to describe its purpose (e.g. `"Footer links"` or `"Sidebar links"`).