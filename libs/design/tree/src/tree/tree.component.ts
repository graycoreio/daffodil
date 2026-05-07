/* eslint-disable quote-props */
import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  inject,
  input,
  signal,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';

import { DaffArticleEncapsulatedDirective } from '@daffodil/design';

import { DaffTreeNotifierService } from './tree-notifier.service';
import { DaffTreeData } from '../interfaces/tree-data';
import { DaffTreeRenderMode } from '../interfaces/tree-render-mode';
import { flattenTree } from '../utils/flatten-tree';
import { hydrateTree } from '../utils/hydrate-tree';

let daffTreeId = 0;

/**
 * The `DaffTreeComponent` allows you to render tree structures as interactable UI.
 *
 * @example Basic use of the tree component
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
  hostDirectives: [{
    directive: DaffArticleEncapsulatedDirective,
  }],
  host: {
    'class': 'daff-tree',
  },
  imports: [
    NgTemplateOutlet,
  ],
})
export class DaffTreeComponent {
  private notifier = inject(DaffTreeNotifierService);

  /**
   * The rendering mode for nodes in the tree.
   *
   * Default value is `in-dom`, which means nodes are present in the DOM.
   *
   * Generally, `not-in-dom` is faster as there are less DOM elements to render,
   * but there may be use-cases (like SEO) where having the tree in the DOM
   * is relevant.
   */
  readonly renderMode = input<DaffTreeRenderMode>('in-dom');

  /**
   * A unique identifier for the tree instance.
   * Used as a prefix for all node IDs in the tree.
   * If not provided, an auto-incrementing number is used.
   */
  readonly id = input<string>(`${daffTreeId++}`);

  /**
   * The tree data you would like to render.
   */
  readonly tree = input<DaffTreeData<unknown>>();

  /**
   * The internal tree element.
   */
  private _tree = computed(() => {
    const tree = this.tree();
    return tree ? hydrateTree(tree, this.id()) : undefined;
  });

  /**
   * A revision counter incremented by notifications from tree items.
   * Used to trigger re-flattening when tree item state changes.
   */
  readonly _revision = signal(0);

  /**
   * @docs-private
   *
   * The flattened tree data. For debugging purposes, you can iterate through this if you want to inspect
   * the resulting array structure we computed to render the tree.
   */
  readonly flatTree = computed(() => {
    this._revision();
    const tree = this._tree();
    return tree ? flattenTree(tree, this.renderMode() === 'not-in-dom') : [];
  });

  /**
   * The template used to render tree-nodes that themselves have children.
   *
   * @docs-private
   */
  readonly withChildrenTemplate = contentChild<TemplateRef<any>>('daffTreeItemWithChildrenTpl');

  /**
   * The template used to render tree-nodes that have no children.
   *
   * @docs-private
   */
  readonly treeItemTemplate = contentChild<TemplateRef<any>>('daffTreeItemTpl');

  constructor() {
    this.notifier.notice$.subscribe(() => {
      this._revision.update((r) => r + 1);
    });
  }
}
