import { DOCUMENT } from '@angular/common';
import {
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

export const sumPx = (...px: string[]): string => (
  px.reduce((acc, curr) => acc + parseFloat(curr.replace(/px/, '')), 0) + 'px'
);

export const negativePx = (px: string) => parseFloat(px.replace(/px/, '')) * -1 + 'px';

@Directive({
  selector: '[daffStickyTracker]',
  standalone: true,
})
export class DaffStickyTrackerDirective implements OnDestroy, OnInit {
  observer: IntersectionObserver | undefined;

  private _nativeElement: HTMLElement;

  private _marker: Element | null = null;

  @Output() stickyChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private document: Document,
  ) { }

  private createMarker(
    position: { bottom?: string; top?: string } | undefined = undefined,
  ) {
    const mark = this.document.createElement('div');
    mark.classList.add('daff-sticky-tracker');
    if (position?.top) {
      mark.style.top = position.top;
    }
    if (position?.bottom) {
      mark.style.bottom = negativePx(position.bottom);
    }
    return mark;
  }

  ngOnInit() {
    this._nativeElement = this.elementRef.nativeElement;
    const style = getComputedStyle(this.elementRef.nativeElement);
    if (style.position !== 'sticky') {
      return;
    }

    //This can happen some times during component instantiation.
    if (style.top === '' || style.bottom === '') {
      return;
    }

    // If both are auto, do nothing.
    if (style.bottom === 'auto' && style.top === 'auto') {
      return;
    }

    //If they're both set to specific values, I don't know what to do.
    if (style.bottom !== 'auto' && style.top !== 'auto') {
      return;
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        this._nativeElement.classList.toggle(
          'daff-sticky',
          entry.intersectionRatio < 1,
        );
      });
    });

    if (style.bottom !== 'auto') {
      this._marker = this._nativeElement.insertAdjacentElement(
        'afterend',
        this.createMarker({
          bottom: style.bottom,
        }),
      );
    }

    if (style.top !== 'auto') {
      this._marker = this._nativeElement.insertAdjacentElement(
        'beforebegin',
        this.createMarker({
          top: style.top,
        }),
      );
    }

    if (!this._marker) {
      throw new Error('DaffStickyTracker error');
    }
    this.observer.observe(this._marker);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
    this._marker?.remove();
  }
}
