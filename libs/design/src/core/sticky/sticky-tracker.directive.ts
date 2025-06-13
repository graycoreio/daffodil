import { DOCUMENT } from '@angular/common';
import {
  Directive,
  ElementRef,
  NgZone,
  OnDestroy,
  AfterViewInit,
  Renderer2,
  Inject,
} from '@angular/core';

@Directive({
  selector: '[daffStickyTracker]',
})
export class DaffStickyTrackerDirective implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;
  private readonly className = 'is-pinned';
  private lastPinnedState: boolean | null = null;
  private debounceTimeout?: number;

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
    private readonly ngZone: NgZone,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {}

  /**
   * @docs-private
   */
  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.setupStickyElement();
      this.createObserver();
    });
  }

  private setupStickyElement(): void {
    const element = this.elementRef.nativeElement;
    const computedStyle = this.document.defaultView?.getComputedStyle(element);

    if (computedStyle.position !== 'sticky') {
      this.renderer.setStyle(element, 'position', 'sticky');
    }

    if (!element.style.top && (!computedStyle.top || computedStyle.top === 'auto')) {
      this.renderer.setStyle(element, 'top', '0');
    }
  }

  private createObserver(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        const shouldBePinned = entry.intersectionRatio < 1;

        if (this.lastPinnedState !== shouldBePinned) {
          if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
          }

          this.debounceTimeout = this.document.defaultView?.setTimeout(() => {
            this.ngZone.run(() => {
              this.renderer[shouldBePinned ? 'addClass' : 'removeClass'](
                this.elementRef.nativeElement,
                this.className,
              );
            });
            this.lastPinnedState = shouldBePinned;
          }, 5);
        }
      },
      {
        threshold: [1],
        rootMargin: '-1px 0px 0px 0px',
      },
    );

    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }
    if (this.observer) {
      this.observer.unobserve(this.elementRef.nativeElement);
    }
    this.observer?.disconnect();
  }
}
