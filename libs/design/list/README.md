# List
List is a flexible component that can be used to display a series of content. It can be modified to support a range of content types.

## Usage

### Within a standalone component
To use list in a standalone component, import it directly into your custom component:

```ts
@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  standalone: true,
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

## Basic List
A `<daff-list>` consists of multiple `<daff-list-item>`s.

<design-land-example-viewer-container example="basic-list"></design-land-example-viewer-container>

## Navigation List
Use `<daff-nav-list>` for navigation lists. `<daff-list-item>` should be directly added to an anchor tag.

<design-land-example-viewer-container example="nav-list"></design-land-example-viewer-container>

## Multi-line List
For lists that have multiple lines per item, wrap each line appropriately with a heading or paragraph tag.

<design-land-example-viewer-container example="multiline-list"></design-land-example-viewer-container>

## List with Icons
To add an icon to a list item, use the `daffPrefix` or `daffSuffix` attributes for the appropriate placements.

<design-land-example-viewer-container example="icon-list"></design-land-example-viewer-container>
