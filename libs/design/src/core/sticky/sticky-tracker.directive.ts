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

interface ComputedStylesData {
  stickyElementStyle: CSSStyleDeclaration;
  parentElements: HTMLElement[];
  parentStyles: CSSStyleDeclaration[];
}

@Directive({
  selector: '[daffStickyTracker]',
})
export class DaffStickyTrackerDirective implements AfterViewInit, OnDestroy {
  private sentinelObserver?: IntersectionObserver;
  private readonly className = 'is-pinned';
  private lastPinnedState: boolean | null = null;
  private debounceTimeout?: number;
  private isBottomSticky = false;
  private stickyPosition = '0';
  private sentinelElement?: HTMLElement;

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
      const computedStylesData = this.gatherComputedStyles();

      this.setupStickyElement(computedStylesData.stickyElementStyle);
      this.createSentinel();
      this.createSentinelObserver(computedStylesData);
    });
  }

  private gatherComputedStyles(): ComputedStylesData {
    const stickyElement = this.elementRef.nativeElement;
    const defaultView = this.document.defaultView;

    if (!defaultView) {
      throw new Error('DaffStickyTracker: Document default view is not available');
    }

    const stickyElementStyle = defaultView.getComputedStyle(stickyElement);

    const parentElements: HTMLElement[] = [];
    const parentStyles: CSSStyleDeclaration[] = [];

    let parent = stickyElement.parentElement;
    while (parent && parent !== this.document.body) {
      parentElements.push(parent);
      parentStyles.push(defaultView.getComputedStyle(parent));
      parent = parent.parentElement;
    }

    return {
      stickyElementStyle,
      parentElements,
      parentStyles,
    };
  }

  private setupStickyElement(computedStyle: CSSStyleDeclaration): void {
    const element = this.elementRef.nativeElement;

    const hasTop = element.style.top || (computedStyle.top && computedStyle.top !== 'auto');
    const hasBottom = element.style.bottom || (computedStyle.bottom && computedStyle.bottom !== 'auto');

    if (hasTop) {
      this.isBottomSticky = false;
      this.stickyPosition = element.style.top || computedStyle.top || '0';

      if (computedStyle.position !== 'sticky') {
        this.renderer.setStyle(element, 'position', 'sticky');
      }
      if (!element.style.top && (!computedStyle.top || computedStyle.top === 'auto')) {
        this.renderer.setStyle(element, 'top', this.stickyPosition);
      }
    } else if (hasBottom) {
      this.isBottomSticky = true;
      this.stickyPosition = element.style.bottom || computedStyle.bottom || '0';

      if (computedStyle.position !== 'sticky') {
        this.renderer.setStyle(element, 'position', 'sticky');
      }
      if (!element.style.bottom && (!computedStyle.bottom || computedStyle.bottom === 'auto')) {
        this.renderer.setStyle(element, 'bottom', this.stickyPosition);
      }
    } else {
      this.isBottomSticky = false;
      this.stickyPosition = '0';

      if (computedStyle.position !== 'sticky') {
        this.renderer.setStyle(element, 'position', 'sticky');
      }
      this.renderer.setStyle(element, 'top', this.stickyPosition);
    }
  }

  private findScrollableParent(
    parentElements: HTMLElement[],
    parentStyles: CSSStyleDeclaration[],
  ): HTMLElement | null {
    for (let i = 0; i < parentElements.length; i++) {
      const overflowY = parentStyles[i]?.overflowY || '';

      if (overflowY === 'auto' || overflowY === 'scroll') {
        return parentElements[i];
      }
    }

    return null;
  }

  private createSentinel(): void {
    const stickyElement = this.elementRef.nativeElement;
    const parentElement = stickyElement.parentElement;

    if (!parentElement) {
      throw new Error('DaffStickyTracker: Sticky element must have a parent element');
    }

    this.sentinelElement = this.renderer.createElement('div');

    this.renderer.setStyle(this.sentinelElement, 'width', '1px');
    this.renderer.setStyle(this.sentinelElement, 'height', '1px');
    this.renderer.setStyle(this.sentinelElement, 'opacity', '0');
    this.renderer.setStyle(this.sentinelElement, 'pointer-events', 'none');
    this.renderer.setStyle(this.sentinelElement, 'margin', '0');
    this.renderer.setStyle(this.sentinelElement, 'padding', '0');
    this.renderer.setStyle(this.sentinelElement, 'border', 'none');
    this.renderer.setStyle(this.sentinelElement, 'overflow', 'hidden');
    this.renderer.setStyle(this.sentinelElement, 'font-size', '0');
    this.renderer.setStyle(this.sentinelElement, 'line-height', '0');

    if (this.isBottomSticky) {
      this.renderer.insertBefore(
        parentElement,
        this.sentinelElement,
        stickyElement.nextSibling,
      );
    } else {
      this.renderer.insertBefore(
        parentElement,
        this.sentinelElement,
        stickyElement,
      );
    }
  }

  private createSentinelObserver(computedStylesData: ComputedStylesData): void {
    const scrollableParent = this.findScrollableParent(computedStylesData.parentElements, computedStylesData.parentStyles);
    const stickyElement = this.elementRef.nativeElement;

    this.sentinelObserver = new IntersectionObserver(
      ([entry]) => {
        const shouldBePinned = !entry.isIntersecting;

        if (this.lastPinnedState !== shouldBePinned) {
          if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
          }

          this.debounceTimeout = this.document.defaultView?.setTimeout(() => {
            this.ngZone.run(() => {
              if (shouldBePinned) {
                this.renderer.addClass(stickyElement, this.className);
              } else {
                this.renderer.removeClass(stickyElement, this.className);
              }
            });
            this.lastPinnedState = shouldBePinned;
          }, 5);
        }
      },
      {
        root: scrollableParent,
        threshold: 0,
        rootMargin: '1px',
      },
    );

    if (this.sentinelElement) {
      this.sentinelObserver.observe(this.sentinelElement);
    }
  }

  ngOnDestroy(): void {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }

    if (this.sentinelObserver && this.sentinelElement) {
      this.sentinelObserver.unobserve(this.sentinelElement);
    }
    this.sentinelObserver?.disconnect();

    if (this.sentinelElement && this.sentinelElement.parentElement) {
      this.renderer.removeChild(this.sentinelElement.parentElement, this.sentinelElement);
    }
  }
}
