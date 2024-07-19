# List
List is a flexible component that can be used to display a series of content. It can be modified to support a range of content types.

## Usage

### Within a standalone component
To use list in a standalone component, import `DAFF_LIST_COMPONENTS` directly into your custom component:

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

## Basic List
A `<daff-list>` consists of multiple `<daff-list-item>`s.

<daff-docs-example-viewer-container-ce example="basic-list"></daff-docs-example-viewer-container-ce>

## Navigation List
Use `<daff-nav-list>` for navigation lists. `<daff-list-item>` should be directly added to an anchor tag.

<daff-docs-example-viewer-container-ce example="nav-list"></daff-docs-example-viewer-container-ce>

## Multi-line List
For lists that have multiple lines per item, wrap each line appropriately with a heading or paragraph tag.

<daff-docs-example-viewer-container-ce example="multiline-list"></daff-docs-example-viewer-container-ce>

## List with Icons
To add an icon to a list item, use the `daffPrefix` or `daffSuffix` attributes for the appropriate placements.

<daff-docs-example-viewer-container-ce example="icon-list"></daff-docs-example-viewer-container-ce>
