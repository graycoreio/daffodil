/* eslint-disable quote-props */

import { DOCUMENT } from '@angular/common';
import {
  computed,
  Directive,
  effect,
  inject,
  input,
  untracked,
} from '@angular/core';

import { DaffTreeNotifierService } from '../tree/tree-notifier.service';
import { DaffTreeFlatNode } from '../utils/flatten-tree';
import { daffTreeOpenAncestors } from '../utils/open-ancestors';

/**
 * The `DaffTreeItemDirective` marks elements as tree child nodes that interact with the parent tree structure.
 *
 * @example Using a `[daffTreeItem]`
 *
 * `[tree]` is a {@link DaffTreeData} and `[daff-tree]` is a {@link DaffTreeComponent}.
 *
 * ```html
 * <ul daff-tree [tree]="tree">
 *   <ng-template #daffTreeItemWithChildrenTpl let-node>
 *       <button daffTreeItem [node]="node">{{ node.title }} </button>
 *   </ng-template>
 *
 *   <ng-template #daffTreeItemTpl let-node>
 *       <a daffTreeItem [node]="node" [routerLink]="node.url">{{ node.title }}</a>
 *   </ng-template>
 * </ul>
 * ```
 *
 */
@Directive({
  selector: '[daffTreeItem]',
  host: {
    'class': 'daff-tree-item',
    '[class.selected]': 'selected()',
    '[class.parent]': 'isParent()',
    '[class.open]': 'open()',
    '[attr.id]': 'id()',
    '[attr.aria-expanded]': 'ariaExpanded()',
    '[style.--depth]': 'depth()',
    '(keydown.escape)': 'onEscape()',
    '(click)': 'onClick()',
  },
})
export class DaffTreeItemDirective {
  private document = inject(DOCUMENT);
  private treeNotifier = inject(DaffTreeNotifierService);

  /**
   * The {@link DaffTreeFlatNode} associated with this specific tree item.
   */
  readonly node = input.required<DaffTreeFlatNode>();

  /**
   * Whether or not the tree item is the currently active item.
   * Note that there is no requirement that there only be one active item at a time.
   *
   * When a tree item becomes selected, all of its ancestor nodes
   * will be automatically opened so that the selected item is visible.
   */
  readonly selected = input(false);

  /**
   * The html `id` of the tree item. This is derived from the {@link DaffTreeData}.
   */
  protected readonly id = computed(() => 'tree-' + this.node().id);

  /**
   * A property indicating the depth of the tree.
   */
  protected readonly depth = computed(() => this.node().level);

  /**
   * Whether or not this node has children.
   */
  protected readonly isParent = computed(() => this.node().hasChildren);

  /**
   * Indicates whether or not the tree is `open`.
   */
  protected readonly open = computed(() => this.node()._treeRef.open);

  /**
   * Accessibility property, notifying users about whether
   * or not the tree item is open.
   */
  protected readonly ariaExpanded = computed(() => {
    const node = this.node();
    return node.hasChildren ? (node._treeRef.open ? 'true' : 'false') : undefined;
  });

  constructor() {
    effect(() => {
      if(this.selected()) {
        const node = untracked(this.node);
        daffTreeOpenAncestors(node._treeRef);
        this.treeNotifier.notify();
      }
    });
  }

  /**
   * @docs-private
   */
  onEscape() {
    this.toggleParent(this.node());
  }

  /**
   * @docs-private
   */
  onClick() {
    if(this.node().hasChildren) {
      this.toggleTree(this.node());
    }
    this.treeNotifier.notify();
  }

  /**
   * Toggle the open state of the tree's parent.
   */
  toggleParent(node: DaffTreeFlatNode) {
    if(node._treeRef?.parent.parent === undefined) {
      return;
    }
    node._treeRef.parent.open = !node._treeRef.parent.open;
    (<Document>this.document).getElementById('tree-' + node._treeRef.parent.id).focus();
  }

  /**
   * Toggle the open state of this specific subtree tree.
   */
  toggleTree(node: DaffTreeFlatNode) {
    if(node._treeRef.open === false) {
      node._treeRef.open = true;
    } else {
      node._treeRef.open = false;
    }
  }
}
