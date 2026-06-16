# Tree
Trees display hierarchical information in a nested, expandable format.

## Overview
Trees help users navigate complex structures by organizing content into parent and child relationships. They're commonly used for navigation menus, file browsers, and category lists. For flat lists without nested content, use the [Navigation List](/libs/design/list/README.md) instead.

<daff-docs-example-viewer example="basic-tree"></daff-docs-example-viewer>

## Usage

Import `DAFF_TREE_COMPONENTS` into your component:

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

> **Deprecation notice:**
> 
> `DaffTreeModule` is deprecated. Use the standalone component imports instead.

## Anatomy
A tree is composed of a container, node templates, and tree items:

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

- **`<daff-tree>`**: The main wrapper that holds the tree and accepts your data.
- **`#daffTreeItemWithChildrenTpl`**: The template for items that can expand to show children. Click handling and icons are added automatically.
- **`#daffTreeItemTpl`**: The template for items at the end of a branch with no children.
- **`[daffTreeItem]`**: Added to links or buttons inside your templates to connect them to the tree.

## Accessibility
The tree follows the [disclosure navigation menu](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/) pattern rather than the [tree view](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/) pattern.

### Built-in behavior
- Unique `id` automatically assigned to each tree item
- `aria-expanded` indicating whether a parent item is open or closed

### Developer responsibilities
- Use links (`<a>`) for navigation and buttons (`<button>`) for expanding sections
- Write clear, descriptive text for each tree item
