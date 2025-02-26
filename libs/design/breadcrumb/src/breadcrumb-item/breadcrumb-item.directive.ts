import {
  ChangeDetectorRef,
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: 'li[daffBreadcrumbItem]',
})
export class DaffBreadcrumbItemDirective {
  /**
   * @docs-private
   */
  @HostBinding('class.daff-breadcrumb__item') class = true;

  /**
   * @docs-private
   */
  @HostBinding('class.active') get activeClass() {
    return this._active;
  }

  /**
   * @docs-private
   */
  @HostBinding('attr.aria-current') get ariaCurrent() {
    return this._active ? 'page' : null;
  }

  private _active = false;

  constructor( private cdRef: ChangeDetectorRef ) {}

  /** Called by the DaffBreadcrumbComponent to set the active state */
  setActive(value: boolean) {
    this._active = value;

    this.cdRef.detectChanges();
  }
}
