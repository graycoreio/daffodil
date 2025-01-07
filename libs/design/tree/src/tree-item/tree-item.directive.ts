import { DOCUMENT } from '@angular/common';
import {
  Directive,
  HostBinding,
  HostListener,
  Inject,
  Input,
} from '@angular/core';

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
  standalone: true,
})
export class DaffTreeItemDirective {

  /**
   * The css class of the tree item.
   *
   * @docs-private
   */
  @HostBinding('class.daff-tree-item') class = true;

  /**
   * The css class of a DaffTreeItemDirective that has children.
   *
   * @docs-private
   */
  @HostBinding('class.parent') classParent = false;

  /**
   * The html `id` of the tree item. This is derived from the {@link DaffTreeData}.
   *
   * @docs-private
   */
  @HostBinding('attr.id') id;

  /**
   * Accessibility property, notifying users about whether
   * or not the tree item is open.
   *
   * @docs-private
   */
  @HostBinding('attr.aria-expanded') ariaExpanded: string;

  /**
   * A css variable indicating the depth of the tree.
   * You can use this to style your templates if you want to
   * use different designs at different depths.
   */
  @HostBinding('style.--depth') depth: number;

  /**
   * The CSS class indicating whether or not the tree is `selected`.
   */
  @HostBinding('class.selected') get selectedClass() {
    return this.selected;
  };

  /**
   * The CSS class indicating whether or not the tree is `open`.
   */
  @HostBinding('class.open') openClass = false;

  /**
   * The {@link DaffTreeFlatNode} associated with this specific tree item.
   *
   * @docs-private
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
    this.classParent = this._node.hasChildren;
    this.openClass = this._node._treeRef.open;

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
    @Inject(DOCUMENT) private document: any,
    private treeNotifier: DaffTreeNotifierService,
  ) {}

  /**
   * @docs-private
   */
  @HostListener('keydown.escape')
  onEscape() {
    this.toggleParent(this.node);
  }

  /**
   * @docs-private
   */
  @HostListener('click')
  onClick() {
    if(this.node.hasChildren) {
      this.toggleTree(this.node);
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
