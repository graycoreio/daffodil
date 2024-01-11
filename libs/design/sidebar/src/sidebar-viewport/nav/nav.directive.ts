import {
  AfterViewInit,
  Directive,
  ElementRef,
} from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[daff-sidebar-viewport-nav]',
})
export class DaffSidebarViewportNavDirective implements AfterViewInit {
  private _height = 64;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this._height = this.elementRef.nativeElement.offsetHeight;
  }

  get height() {
    return this._height;
  }
}
