# Tree
Trees display hierarchical information in a nested, expandable format.

## Overview
Trees help users navigate complex structures by organizing content into parent and child relationships. They're commonly used for navigation menus, file browsers, and category lists. For flat lists without nested content, use the [navigation list](/libs/design/list/README.md) instead.

<daff-docs-example-viewer example="basic-tree"></daff-docs-example-viewer>

## Usage

### Within a standalone component
To use tree in a standalone component, import `DAFF_TREE_COMPONENTS` directly into your custom component:

```ts
import { DAFF_TREE_COMPONENTS } from '@daffodil/design/tree';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_TREE_COMPONENTS,
  ],
})
export class CustomComponent {}
```

### Within a module (deprecated)
To use tree in a module, import `DaffTreeModule` into your custom module:

```ts
import { NgModule } from '@angular/core';
import { DaffTreeModule } from '@daffodil/design/tree';
import { CustomComponent } from './custom.component';

@NgModule({
  declarations: [
    CustomComponent,
  ],
  exports: [
    CustomComponent,
  ],
  imports: [
    DaffTreeModule,
  ],
})
export class CustomComponentModule { }
```

> **Warning**
>
> This method is deprecated. It's recommended to update all custom components to standalone.

## Anatomy
A tree consists of the following parts:

### Container
`<daff-tree>`: The main wrapper that holds the tree and accepts your data.

### Node templates
Define how each tree item looks:

- `#daffTreeItemWithChildrenTpl`: For items that can expand to show children. Click handling and icons are added automatically.
- `#daffTreeItemTpl`: For items at the end of a branch with no children.

### Tree item
`[daffTreeItem]`: Added to links or buttons inside your templates to connect them to the tree.

### Basic structure
```html
<daff-tree [tree]="treeData">
  <ng-template #daffTreeItemWithChildrenTpl let-node>
    <button daffTreeItem [node]="node">{{ node.title }}</button>
  </ng-template>

  <ng-template #daffTreeItemTpl let-node>
    <a daffTreeItem [node]="node" [routerLink]="node.url">{{ node.title }}</a>
  </ng-template>
</daff-tree>
```

## Accessibility
The tree follows the [disclosure navigation menu](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/) pattern rather than the [tree view](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/) pattern.

### Daffodil provides
- Unique `id` automatically assigned to each tree item
- `aria-expanded` indicating whether a parent item is open or closed

### Developer responsibilities
- Use links (`<a>`) for navigation and buttons (`<button>`) for expanding sections
- Write clear, descriptive text for each tree item
