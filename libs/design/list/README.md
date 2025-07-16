# List
List is a stylized container used to vertically group a series of related content.

## Overview
List supports two main variants:

| Attribute | Description |
| --------- | ----------- |
| `daff-list` | A standard list used for grouping generic content. |
| `daff-nav-list` | A navigation list intended for use with anchor elements (`<a>`). |

## Usage

### Within a standalone component
To use list in a standalone component, import each list type directly into your custom component.

Available imports:
- `DAFF_LIST_COMPONENTS`
- `DAFF_NAV_LIST_COMPONENTS`

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

### Within a module (deprecated)
To use list in a module, import `DaffListModule` into your custom module:

```ts
import { NgModule } from '@angular/core';
import { DaffListModule } from '@daffodil/design/list';
import { CustomComponent } from './custom.component';

@NgModule({
	declarations: [
    CustomComponent,
  ],
  exports: [
    CustomComponent,
  ],
  imports: [
    DaffListModule,
  ],
})
export class CustomComponentModule { }
```

> This method is deprecated. It's recommended to update all custom components to standalone.

## Anatomy
A list consists of multiple `daff-list-item` elements.

```html
<daff-list>
  <daff-list-item></daff-list-item>
  <daff-list-item></daff-list-item>
  <daff-list-item></daff-list-item>
</daff-list>
```

```html
<daff-nav-list>
  <a href="/" daff-list-item></a>
  <a href="/" daff-list-item></a>
  <a href="/" daff-list-item></a>
</daff-nav-list>
```

### Icon support
Use the `[daffPrefix]` directive to display a leading visual icon to a list item.

<design-land-example-viewer-container example="icon-list"></design-land-example-viewer-container>

### Multi-line lists
For list items that contain multiple lines of text, use the `[daffListItemTitle]` directive to identify the primary title. Additional supporting content can be added using `<div>` or `<p>` elements.

<design-land-example-viewer-container example="multiline-list"></design-land-example-viewer-container>

## Accessibility
By default, list includes appropriate ARIA roles by default to support screen readers and provide an accessible experience.

- `<daff-list>` is assigned `role="list"` to identify a list of items.
- `<daff-list-item>` within a `<daff-list>` is assigned `role="listitem"` to identify a list item contained inside the list.
- `<daff-nav-list>`is assigned `role="navigation"` to indicate that the list is used for navigation.

> Always provide an accessible label for `<daff-nav-list>` via `aria-label` or `aria-labelledby` to describe its purpose (e.g. `"Footer links"` or `"Sidebar links"`).