/* eslint-disable quote-props */
import {
  ChangeDetectorRef,
  Directive,
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
@Directive({
  selector: 'li[daffBreadcrumbItem]',
  host: {
    'class': 'daff-breadcrumb__item',
    '[class.active]': '_active',
    '[attr.aria-current]': '_active ? "page" : null',
  },
})
export class DaffBreadcrumbItemDirective {
  private _active = false;

  constructor( private cdRef: ChangeDetectorRef ) {}

  /** Called by the DaffBreadcrumbComponent to set the active state */
  setActive(value: boolean) {
    this._active = value;

    this.cdRef.detectChanges();
  }
}
