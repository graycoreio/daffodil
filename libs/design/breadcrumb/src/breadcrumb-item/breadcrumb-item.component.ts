/* eslint-disable quote-props */
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';

/**
 * Represents each individual breadcrumb item. Must be used on a `<li>` element.
 *
 * @example
 * ```html
 * <li daffBreadcrumbItem>
 *  <a routerLink="/">Link</a>
 * </li>
 * ```
 */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'li[daffBreadcrumbItem]',
  template: `
    <ng-template #item>
      <ng-content></ng-content>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'daff-breadcrumb__item',
    '[class.active]': '_active',
    '[attr.aria-current]': '_active ? "page" : null',
  },
})
export class DaffBreadcrumbItemComponent {
  /**
   * @docs-private
   */
  @ViewChild('item', { read: TemplateRef, static: true }) itemRef: TemplateRef<any>;

  private _active = false;

  constructor( private cdRef: ChangeDetectorRef ) {}

  /** Called by the DaffBreadcrumbComponent to set the active state */
  setActive(value: boolean) {
    this._active = value;

    this.cdRef.detectChanges();
  }
}
