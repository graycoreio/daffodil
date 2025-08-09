import {
  Directive,
  Input,
} from '@angular/core';

import { collect } from '@daffodil/core';

import { DaffTreeNotifierService } from '../tree/tree-notifier.service';
import { DaffTreeFlatNode } from '../utils/flatten-tree';

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
    class: 'daff-tree-item',
    '[class.selected]': 'selected',
    '[class.parent]': 'isParent',
    '[class.open]': 'open',
    '[attr.id]': 'id',
    '[attr.aria-expanded]': 'ariaExpanded',
    '[style.--depth]': 'depth',
    '(keydown.escape)': 'onEscape()',
    '(click)': 'onClick()',
  },
})
export class DaffTreeItemDirective {
  private isParent = false;

  /**
   * The html `id` of the tree item. This is derived from the {@link DaffTreeData}.
   *
   */
  private id: string;

  /**
   * Accessibility property, notifying users about whether
   * or not the tree item is open.
   */
  private ariaExpanded: string;

  /**
   * A property indicating the depth of the tree.
   */
  private depth: number;

  /**
   * Indicates whether or not the tree is `open`.
   */
  private open = false;

  /**
   * The {@link DaffTreeFlatNode} associated with this specific tree item.
   */
  private _node: DaffTreeFlatNode;

  /**
   * The {@link DaffTreeFlatNode} associated with this specific tree item.
   */
  @Input()
  get node() {
    return this._node;
  };
  set node(val: DaffTreeFlatNode) {
    this._node = val;
    this.id = 'tree-' + this._node.id;
    this.depth = this._node.level;
    this.isParent = this._node.hasChildren;
    this.open = this._node._treeRef.open;

    if(this._node.hasChildren) {
      this.ariaExpanded = this._node._treeRef.open ? 'true' : 'false';
    }
  }

  /**
   * Whether or not the tree item is the currently active item.
   * Note that there is no requirement there there only be one active item at a time.
   */
  @Input() selected = false;

  constructor(
    private treeNotifier: DaffTreeNotifierService,
  ) {}

  /**
   * @docs-private
   */
  onEscape() {
    this.toggleParent();
  }

  /**
   * @docs-private
   */
  onClick() {
    if (this.node.hasChildren) {
      this.toggleTree();
    }
  }

  /**
   * Opens parent and parent of parent all the way to the root of the tree.
   */
  openAncestors() {
    collect(this._node._treeRef, (node) => [node.parent], this._node.level).forEach((node) => node.open = true);
    this.treeNotifier.notify();
  }

  /**
   * Toggle the open state of the tree's parent.
   */
  toggleParent() {
    if (this.node._treeRef?.parent.parent === undefined) {
      return;
    }
    this.node._treeRef.parent.open = !this.node._treeRef.parent.open;
    this.treeNotifier.notify();
  }

  /**
   * Toggle the open state of this specific subtree tree.
   */
  toggleTree() {
    if (this.node._treeRef.open === false) {
      this.node._treeRef.open = true;
    } else {
      this.node._treeRef.open = false;
    }
    this.treeNotifier.notify();
  }
}
