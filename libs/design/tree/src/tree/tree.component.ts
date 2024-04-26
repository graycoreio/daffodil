import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';

import { daffArticleEncapsulatedMixin } from '@daffodil/design';

import { DaffTreeNotifierService } from './tree-notifier.service';
import { DaffTreeData } from '../interfaces/tree-data';
import { DaffTreeRenderMode } from '../interfaces/tree-mode';
import { DaffTreeUi } from '../interfaces/tree-ui';
import {
  DaffTreeFlatNode,
  flattenTree,
} from '../utils/flatten-tree';
import { hydrateTree } from '../utils/hydrate-tree';

/**
 * An _elementRef and an instance of renderer2 are needed for the list mixins
 */
class DaffTreeBase {
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
}

const _daffTreeBase = daffArticleEncapsulatedMixin((DaffTreeBase));

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
export class DaffTreeComponent extends _daffTreeBase implements OnInit, OnChanges {

  /**
   * The css class of the daff-tree.
   *
   * @docs-private
   */
  @HostBinding('class.daff-tree') class = true;

  /**
   * The rendering mode for nodes in the tree.
   *
   * Default value is 'in-dom', which means nodes are present in the DOM.
   *
   * Generally, `not-in-dom` is faster as there are less DOM elements to render,
   * but there may be use-cases (like SEO) where having the tree in the DOM
   * is relevant.
   */
  @Input() renderMode: DaffTreeRenderMode;

  /**
   * The internal tree element.
   */
  private _tree: DaffTreeUi<unknown> = undefined;

  /**
   * The flattened tree data. You can iterate through this if you want to inspect
   * the resulting array structure we computed to render the tree.
   */
  public flatTree: DaffTreeFlatNode[] = [];

  /**
   * The tree data you would like to render.
   */
  @Input() tree: DaffTreeData<unknown>;

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
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {
    super(elementRef, renderer);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes.tree.currentValue) {
      this._tree = undefined;
      this.flatTree = [];
      return;
    }

    if(changes.renderMode && !changes.tree) {
      this.flatTree = flattenTree(this._tree, changes.renderMode.currentValue === 'not-in-dom');
    } else if(changes.renderMode || changes.tree) {
      this._tree = hydrateTree(changes.tree?.currentValue ?? this.tree);
      this.flatTree = flattenTree(this._tree, (changes.renderMode?.currentValue ?? this.renderMode) === 'not-in-dom');
    }
  }

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
      this.flatTree = flattenTree(this._tree, this.renderMode === 'not-in-dom');
    });
  }
}
