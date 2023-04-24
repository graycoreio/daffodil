import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  HostBinding,
  Input,
  OnInit,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';

import { DaffTreeData } from '../interfaces/tree-data';
import { DaffTreeUi } from '../interfaces/tree-ui';
import {
  DaffTreeFlatNode,
  flattenTree,
} from '../utils/flatten-tree';
import { hydrateTree } from '../utils/hydrate-tree';
import { DaffTreeNotifierService } from './tree-notifier.service';

/**
 * The `DaffTreeComponent` allows you to render tree structures as interactable ui.
 *
 * They can be used like:
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
 * where `tree` is a {@link DaffTreeData}.
 *
 */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ul[daff-tree]',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    DaffTreeNotifierService,
  ],
})
export class DaffTreeComponent implements OnInit {

  /**
   * The css class of the daff-tree.
   *
   * @docs-private
   */
  @HostBinding('class.daff-tree') class = true;

  /**
   * The internal tree element.
   */
  private tree: DaffTreeUi<unknown> = undefined;

  /**
   * The flattened tree data. You can iterate through this if you want to inspect
   * the resulting array structure we computed to render the tree.
   */
  public flatTree: DaffTreeFlatNode[] = [];

  /**
   * @docs-private
   */
  private _dataTree: DaffTreeData<unknown> = undefined;

  /**
   * The tree data you would like to render.
   */
  @Input('tree')
  get dataTree() {
    return this._dataTree;
  }
  set dataTree(dataTree: DaffTreeData<unknown>){
    if(!dataTree) {
      this._dataTree = undefined;
      this.tree = undefined;
      this.flatTree = [];
      return;
    }
    this._dataTree = dataTree;
    this.tree = hydrateTree(this.dataTree);
    this.flatTree = flattenTree(this.tree);
  };

  /**
   * The template used to render tree-nodes that themselves have children.
   *
   * @docs-private
   */
  @ContentChild('daffTreeItemWithChildrenTpl', { static: true })
  withChildrenTemplate: TemplateRef<any>;

  /**
   * The template used to render tree-nodes that have no children.
   *
   * @docs-private
   */
  @ContentChild('daffTreeItemTpl', { static: true }) treeItemTemplate: TemplateRef<any>;

  constructor(
    private notifier: DaffTreeNotifierService,
  ) {}

  /**
   * The track-by function used to reduce tree-item re-renders
   */
  trackByTreeElement(index: number, el: any): any {
    return el.title;
  }

  /**
   * @docs-private
   */
  ngOnInit(): void {
    this.notifier.notice$.subscribe(() => {
      this.flatTree = flattenTree(this.tree);
    });
  }
}
