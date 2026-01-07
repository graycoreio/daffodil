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
  TemplateRef,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import {
  DaffArticleEncapsulatedDirective,
  DaffSkeletonableDirective,
} from '@daffodil/design';
import { DaffMenuModule } from '@daffodil/design/menu';

import { DaffBreadcrumbItemComponent } from '../breadcrumb-item/breadcrumb-item.component';
import { DaffBreadcrumbRender } from '../breadcrumb-render/breadcrumb-render.type';
import { toRenderType } from '../breadcrumb-render/to-render-type';

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
  @ContentChildren(DaffBreadcrumbItemComponent) breadcrumbItems!: QueryList<DaffBreadcrumbItemComponent>;

  /**
   * @docs-private
   */
  @ViewChild('fullMenu', { static: true }) fullMenu: TemplateRef<unknown>;

  /**
   * @docs-private
   */
  @ViewChild('partialMenu', { static: true }) partialMenu: TemplateRef<unknown>;

  /**
   * @docs-private
   */
  _breadcrumbItems = contentChildren(DaffBreadcrumbItemComponent);

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
    const res = items.reduce<DaffBreadcrumbItemComponent[]>((acc, item, index) => {
      if(items.length >= 5
          && (index !== 0 && index !== 1)
          && (index !== items.length - 1 && index !== items.length - 2)
      ) {
        return [...acc, item];
      } else {
        return acc;
      }
    }, []);
    return res;
  });

  _fullMenuItems = computed(() => {
    const items = this._breadcrumbItems();
    return items.slice(0, items.length - 1);
  });

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
