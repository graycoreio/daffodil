/* eslint-disable quote-props */
import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ContentChildren,
  QueryList,
  AfterContentInit,
  DestroyRef,
  ViewChild,
  contentChildren,
  computed,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import {
  DaffArticleEncapsulatedDirective,
  DaffSkeletonableDirective,
} from '@daffodil/design';
import {
  DaffMenuComponent,
  DaffMenuModule,
} from '@daffodil/design/menu';

import { DaffBreadcrumbRender } from './breadcrumb-render.type';
import { toRenderType } from './to-render-type';
import { DaffBreadcrumbItemDirective } from '../breadcrumb-item/breadcrumb-item.directive';

/**
 * Groups breadcrumb items. Must be applied to a native `<ol>` element.
 *
 * @example
 * ```html
 * <ol daff-breadcrumb>
 *  <li daffBreadcrumbItem>
 *    <a routerLink="/">Home</a>
 *  </li>
 *  <li daffBreacrumbItem>
 *    <span>Current page</span>
 *  </li>
 * </ol>
 * ```
 */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ol[daff-breadcrumb]',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
  hostDirectives: [
    { directive: DaffArticleEncapsulatedDirective },
    {
      directive: DaffSkeletonableDirective,
      inputs: ['skeleton'],
    },
  ],
  host: {
    'class': 'daff-breadcrumb',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [
    DaffMenuModule,
    NgTemplateOutlet,
  ],
})

export class DaffBreadcrumbComponent implements AfterContentInit {

  constructor(private destroyRef: DestroyRef) {}

  /**
   * @docs-private
   */
  @ContentChildren(DaffBreadcrumbItemDirective) breadcrumbItems!: QueryList<DaffBreadcrumbItemDirective>;

  /**
   * @docs-private
   */
  @ViewChild('fullMenu', { read: DaffMenuComponent, static: true }) fullMenu;

  /**
   * @docs-private
   */
  @ViewChild('partialMenu', { read: DaffMenuComponent, static: true }) partialMenu;

  /**
   * @docs-private
   */
  _breadcrumbItems = contentChildren(DaffBreadcrumbItemDirective);

  _computedBreadcrumbItems = computed(() => {
    const items = this._breadcrumbItems();

    return items.reduce<DaffBreadcrumbRender[]>((acc, item, index) => {
      const res = toRenderType(item, items.length, index);
      if(Array.isArray(res)) {
        return [...acc, ...res];
      } else {
        return [...acc,  res];
      }
    }, []);
  });

  _partialMenuItems = computed(() => {
    const items = this._breadcrumbItems();
    const res = items.reduce<DaffBreadcrumbItemDirective[]>((acc, item, index) => {
      if(items.length > 5
          && (index !== 0 && index !== 1)
          && (index !== items.length - 1 && index !== items.length - 2)
      ) {
        console.log(...acc, item);
        return [...acc, item];
      } else {
        return acc;
      }
    }, []);
    return res;
  });

  _fullMenuItems = computed(() => this._breadcrumbItems().slice(0, length - 1));

  /**
   * @docs-private
   */
  ngAfterContentInit() {
    this.updateActiveState();

    this.breadcrumbItems.changes
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.updateActiveState());
  }

  private updateActiveState() {
    if (!this.breadcrumbItems.length) {
      return;
    }

    this.breadcrumbItems.forEach(item => item.setActive(false));

    this.breadcrumbItems.last.setActive(true);
  }
}
