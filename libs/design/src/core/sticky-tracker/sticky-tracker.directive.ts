import {
  Directive,
  ElementRef,
  OnDestroy,
} from '@angular/core';

export const sumPx = (...px: string[]): string => (
  px.reduce((acc, curr) => acc + parseInt(curr.replace(/px/, ''), 10), 0) + 'px'
);

@Directive({
  selector: '[daffStickyTracker]',
  standalone: true,
})
export class DaffStickyTrackerDirective implements OnDestroy {
  observer: IntersectionObserver;

  constructor(private elementRef: ElementRef) {
    const style = getComputedStyle(this.elementRef.nativeElement);
    const top = style.top;
    const height = style.height;
    const bottom = style.bottom;

    let rootMargin = '0px 0px 0px 0px';
    let threshold = 1;
    if (bottom !== 'auto' && bottom !== '') {
      rootMargin = `0px 0px ${sumPx(bottom, '-1px')} 0px`;
      threshold = 1;
    }

    if (top !== 'auto' && top !== '') {
      rootMargin = `${sumPx(top, '-1px')} 0px 0px 0px`;
      threshold = 0.98;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(
            this.elementRef.nativeElement.tagName,
            entry.intersectionRatio,
            entry.isIntersecting,
            entry,
          );
          if (!entry.isIntersecting) {
            this.elementRef.nativeElement.classList.add('daff-sticky');
          } else {
            this.elementRef.nativeElement.classList.remove('daff-sticky');
          }
        });
      },
      {
        rootMargin,
        threshold: [threshold],
      },
    );
    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
