import {
  Directive,
  ElementRef,
  HostBinding,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: 'li[daffBreadcrumbItem]',
})
export class DaffBreadcrumbItemDirective {
  /**
   * @docs-private
   */
  @HostBinding('class.daff-breadcrumb__item') class = true;

  private _active = false;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {}

  /** Called by the DaffBreadcrumbComponent to set the active state */
  setActive(value: boolean) {
    this._active = value;
    if (value) {
      this.renderer.addClass(this.elementRef.nativeElement, 'active');
      this.renderer.setAttribute(this.elementRef.nativeElement, 'aria-current', 'page');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'active');
    }
  }
}
