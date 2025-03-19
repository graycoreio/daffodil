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

  @ViewChild('menu', { read: DaffMenuComponent }) menu;

  @ViewChild('inner', { read: DaffMenuComponent }) inner;

  /**
   * @docs-private
   */
  _breadcrumbItems = contentChildren(DaffBreadcrumbItemDirective);

  _computedBreacrumbItems = computed(() => {
    const items = this._breadcrumbItems();

    return items.reduce((acc, item, index) => {

    }, []);
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
