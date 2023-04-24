# Tree

Trees are used to visualize hierarchial information. They are often used to display navigational structures like nested lists of links.

## Overview

The `DaffTreeComponent` renders a tree structure. Typically, this is a structure of `<a>` and `<button>` elements that allow users to either navigate to a page, or explore the tree to find an item inside the tree that they want to navigate to.

Instead of defining a recursive tree structure of components, which is often prohibitively slow when rendering large trees, the `DaffTreeComponent` renders a flattened tree, using padding to indicate the nesting level of the tree elements.

Generally, tree usage consists of taking existing tree data, converting it to the `DaffTreeData` format, setting the `tree` input on the `DaffTreeComponent`, and providing templates for the cases where the tree element has children or not.

## Features

The `DaffTreeComponent` controls the rendering of the structure of the tree and provides template slots so that you can control the ultimate UI rendered for each node.

Currently, we support two kind of templates `daffTreeItemWithChildrenTpl` and `daffTreeItemTpl`. These templates allow you to control the content of each tree node. In the case of `daffTreeItemWithChildrenTpl` a `click` handler will be automatically applied (along with an icon indicating the expanded state) to the template to allow users to automatically open and close the node.

```html
<ng-template #daffTreeItemWithChildrenTpl let-node>
  <button daffTreeItem [node]="node">{{ node.title }} </button>
</ng-template>

<ng-template #daffTreeItemTpl let-node>
  <a daffTreeItem [node]="node" [routerLink]="node.url">{{ node.title }}</a>
</ng-template>
```

## Usage

### Basic Tree

<design-land-example-viewer-container example="basic-tree">
</design-land-example-viewer-container>

## Accessibility

The `DaffTreeComponent` follows the specification for a [disclosure navigation menu](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/) instead of a [tree view](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/).