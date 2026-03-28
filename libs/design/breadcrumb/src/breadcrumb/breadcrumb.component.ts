/* eslint-disable quote-props */
import { BreakpointObserver } from '@angular/cdk/layout';
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
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import {
  DaffArticleEncapsulatedDirective,
  DaffSkeletonableDirective,
  DaffBreakpoints,
} from '@daffodil/design';
import {
  DAFF_MENU_COMPONENTS,
  DaffMenuService,
} from '@daffodil/design/menu';

import { DaffBreadcrumbItemComponent } from '../breadcrumb-item/breadcrumb-item.component';
import { DaffBreadcrumbMenuItemDirective } from '../breadcrumb-menu-item/breadcrumb-menu-item.directive';
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
    DAFF_MENU_COMPONENTS,
    NgTemplateOutlet,
    DaffBreadcrumbMenuItemDirective,
  ],
  providers: [DaffMenuService],
})

export class DaffBreadcrumbComponent implements AfterContentInit {

  constructor(
    private destroyRef: DestroyRef,
    private breakpointObserver: BreakpointObserver,
  ) {}

  /**
   * @docs-private
   */
  _isMobile = signal(false);

  /**
   * @docs-private
   */
  @ContentChildren(DaffBreadcrumbItemComponent) breadcrumbItems!: QueryList<DaffBreadcrumbItemComponent>;

  /**
   * @docs-private
   */
  @ViewChild('mobileMenu', { static: true }) fullMenu: TemplateRef<unknown>;

  /**
   * @docs-private
   */
  @ViewChild('desktopMenu', { static: true }) partialMenu: TemplateRef<unknown>;

  /**
   * @docs-private
   */
  _breadcrumbItems = contentChildren(DaffBreadcrumbItemComponent);

  /**
   * @docs-private
   */
  _partition = computed(() => {
    this._isMobile(); // signal rerenders breadcrumb on viewport change

    const items = this._breadcrumbItems();
    const visible: DaffBreadcrumbRender[] = [];
    const menu: DaffBreadcrumbItemComponent[] = [];

    for(let index = 0; index < items.length; index++) {
      const item = items[index];
      const res = toRenderType(item, items.length, index);
      if(res) {
        if(index === 0) {
          visible.push({ type: 'menu', target: 'mobileMenu' });
        }
        visible.push(res);
      } else {
        if(menu.length === 0) {
          visible.push({ type: 'menu', target: 'desktopMenu' });
        }
        menu.push(item);
      }
    }

    return { visible, menu };
  });

  /**
   * @docs-private
   */
  _computedBreadcrumbItems = computed(() => this._partition().visible);

  /**
   * @docs-private
   */
  _desktopMenuItems = computed(() => this._partition().menu);

  /**
   * @docs-private
   */
  _mobileMenuItems = computed(() => {
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

    this.breakpointObserver
      .observe([DaffBreakpoints.MOBILE])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(result => {
        this._isMobile.set(!result.matches);
      });
  }

  private updateActiveState() {
    if (!this.breadcrumbItems.length) {
      return;
    }

    this.breadcrumbItems.forEach(item => item.setActive(false));

    this.breadcrumbItems.last.setActive(true);
  }
}
