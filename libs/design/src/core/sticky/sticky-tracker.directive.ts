
import {
  Directive,
  ElementRef,
  OnDestroy,
  Renderer2,
  Inject,
  Input,
  afterNextRender,
  DOCUMENT,
} from '@angular/core';

@Directive({
  selector: '[daffStickyTracker]',
})
export class DaffStickyTrackerDirective implements OnDestroy {
  @Input() sticky: 'top' | 'bottom' | undefined = undefined;

  private sentinelObserver?: IntersectionObserver;
  private readonly className = 'is-pinned';
  private lastPinnedState: boolean | null = null;
  private debounceTimeout?: number;
  private sentinelElement?: HTMLElement;
  private idleCallbackId?: number;

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {
    afterNextRender({
      write: () => {
        this.createSentinel();
      },
    });

    afterNextRender({
      read: () => {
        this.scheduleObserverCreation();
      },
    });
  }

  private get isBottomSticky(): boolean {
    return this.sticky === 'bottom';
  }

  private scheduleObserverCreation(): void {
    const defaultView = this.document.defaultView;

    if (defaultView?.requestIdleCallback) {
      this.idleCallbackId = defaultView.requestIdleCallback(() => {
        this.createSentinelObserver();
      });
    } else {
      this.idleCallbackId = defaultView?.setTimeout(() => {
        this.createSentinelObserver();
      }, 0);
    }
  }

  private findScrollableParent(): HTMLElement | null {
    let parent = this.elementRef.nativeElement.parentElement;

    while (parent && parent !== this.document.body) {
      const computedStyle = this.document.defaultView?.getComputedStyle(parent);
      const overflowY = computedStyle?.overflowY;

      if (overflowY === 'auto' || overflowY === 'scroll') {
        return parent;
      }
      parent = parent.parentElement;
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

  private createSentinelObserver(): void {
    const scrollableParent = this.findScrollableParent();
    const stickyElement = this.elementRef.nativeElement;

    this.sentinelObserver = new IntersectionObserver(
      ([entry]) => {
        const shouldBePinned = !entry.isIntersecting;

        if (this.lastPinnedState !== shouldBePinned) {
          if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
          }

          this.debounceTimeout = this.document.defaultView?.setTimeout(() => {
            if (shouldBePinned) {
              this.renderer.addClass(stickyElement, this.className);
            } else {
              this.renderer.removeClass(stickyElement, this.className);
            }
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
    if (this.idleCallbackId !== undefined) {
      const defaultView = this.document.defaultView;
      if (defaultView?.cancelIdleCallback) {
        defaultView.cancelIdleCallback(this.idleCallbackId);
      } else {
        defaultView?.clearTimeout(this.idleCallbackId);
      }
    }

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
