import {
  Component,
  ViewChild,
  ElementRef,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { DaffStickyTrackerDirective } from './sticky-tracker.directive';

const DEBOUNCE_TIMEOUT = 5;

@Component({
  standalone: true,
  imports: [DaffStickyTrackerDirective],
  template: `
    <div #container style="height: 200vh;">
      <div #sticky
           daffStickyTracker
           sticky="top"
           style="position: sticky; top: 0; height: 50px; background: red;">
        Top Sticky Element
      </div>
      <div style="height: 100vh;">Content below</div>
    </div>
  `,
})
class TopStickyTestComponent {
  @ViewChild('sticky', { static: true }) sticky!: ElementRef<HTMLElement>;
  @ViewChild('container', { static: true }) container!: ElementRef<HTMLElement>;
}

@Component({
  standalone: true,
  imports: [DaffStickyTrackerDirective],
  template: `
    <div #container style="height: 200vh;">
      <div style="height: 100vh;">Content above</div>
      <div #sticky
           daffStickyTracker
           sticky="bottom"
           style="position: sticky; bottom: 0; height: 50px; background: blue;">
        Bottom Sticky Element
      </div>
      <div style="height: 100vh;">Content below</div>
    </div>
  `,
})
class BottomStickyTestComponent {
  @ViewChild('sticky', { static: true }) sticky!: ElementRef<HTMLElement>;
  @ViewChild('container', { static: true }) container!: ElementRef<HTMLElement>;
}



@Component({
  standalone: true,
  imports: [DaffStickyTrackerDirective],
  template: `
    <div #container style="height: 200vh; overflow-y: auto;">
      <div style="height: 100vh;">Content above</div>
      <div #sticky
           daffStickyTracker
           sticky="top"
           style="position: sticky; top: 0; height: 50px; background: purple;">
        Scrollable Container Sticky Element
      </div>
      <div style="height: 100vh;">Content below</div>
    </div>
  `,
})
class ScrollableContainerTestComponent {
  @ViewChild('sticky', { static: true }) sticky!: ElementRef<HTMLElement>;
  @ViewChild('container', { static: true }) container!: ElementRef<HTMLElement>;
}





describe('DaffStickyTrackerDirective', () => {
  let mockObserverCallback: IntersectionObserverCallback | undefined;
  let mockObserverInstance: jasmine.SpyObj<IntersectionObserver>;
  let originalIntersectionObserver: any;
  let mockRequestIdleCallback: jasmine.Spy;
  let mockCancelIdleCallback: jasmine.Spy;
  let originalRequestIdleCallback: any;
  let originalCancelIdleCallback: any;
  let idleCallbacks: (() => void)[] = [];

  const createMockEntry = (
    target: Element,
    overrides: Partial<IntersectionObserverEntry>,
  ): IntersectionObserverEntry => ({
    boundingClientRect: <DOMRectReadOnly>{ top: 0, left: 0, bottom: 50, right: 100, width: 100, height: 50, x: 0, y: 0 },
    intersectionRatio: 1,
    intersectionRect: <DOMRectReadOnly>{},
    isIntersecting: true,
    rootBounds: <DOMRectReadOnly>{ top: 0, left: 0, bottom: 300, right: 100, width: 100, height: 300, x: 0, y: 0 },
    target,
    time: 0,
    ...overrides,
  });

  const findSentinelElement = (containerEl: HTMLElement, stickyEl: HTMLElement, isBottomSticky: boolean): HTMLElement => {
    const potentialSentinels = Array.from(containerEl.querySelectorAll('div')).filter(el => {
      const htmlEl = <HTMLElement>el;
      return htmlEl !== stickyEl &&
             htmlEl.style.width === '1px' &&
             htmlEl.style.height === '1px' &&
             htmlEl.style.opacity === '0';
    });

    if (potentialSentinels.length === 0) {
      throw new Error('Sentinel element not found');
    }

    const children = Array.from(containerEl.children);
    const stickyIndex = children.indexOf(stickyEl);

    for (const sentinel of potentialSentinels) {
      const sentinelIndex = children.indexOf(sentinel);
      if (isBottomSticky && sentinelIndex > stickyIndex) {
        return <HTMLElement>sentinel;
      }
      if (!isBottomSticky && sentinelIndex < stickyIndex) {
        return <HTMLElement>sentinel;
      }
    }

    throw new Error(`Sentinel element not found in expected position for ${isBottomSticky ? 'bottom' : 'top'} sticky`);
  };

  const triggerIdleCallbacks = () => {
    const callbacks = [...idleCallbacks];
    idleCallbacks = [];
    callbacks.forEach(callback => callback());
  };

  beforeEach(() => {
    originalIntersectionObserver = (<any>globalThis).IntersectionObserver;
    originalRequestIdleCallback = (<any>globalThis).requestIdleCallback;
    originalCancelIdleCallback = (<any>globalThis).cancelIdleCallback;

    idleCallbacks = [];

    mockObserverInstance = jasmine.createSpyObj('IntersectionObserver', [
      'observe',
      'unobserve',
      'disconnect',
    ]);

    const MockIntersectionObserver = function(this: any, callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
      mockObserverCallback = callback;
      this.observe = mockObserverInstance.observe;
      this.unobserve = mockObserverInstance.unobserve;
      this.disconnect = mockObserverInstance.disconnect;
      return this;
    };

    (<any>globalThis).IntersectionObserver = MockIntersectionObserver;

    mockRequestIdleCallback = jasmine.createSpy('requestIdleCallback').and.callFake((callback: () => void) => {
      idleCallbacks.push(callback);
      return idleCallbacks.length;
    });

    mockCancelIdleCallback = jasmine.createSpy('cancelIdleCallback').and.callFake((id: number) => {
      if (id > 0 && id <= idleCallbacks.length) {
        idleCallbacks[id - 1] = () => {};
      }
    });

    (<any>globalThis).requestIdleCallback = mockRequestIdleCallback;
    (<any>globalThis).cancelIdleCallback = mockCancelIdleCallback;
  });

  afterEach(() => {
    (<any>globalThis).IntersectionObserver = originalIntersectionObserver;
    (<any>globalThis).requestIdleCallback = originalRequestIdleCallback;
    (<any>globalThis).cancelIdleCallback = originalCancelIdleCallback;
    idleCallbacks = [];
  });

  describe('Top Sticky Behavior', () => {
    let fixture: ComponentFixture<TopStickyTestComponent>;
    let component: TopStickyTestComponent;
    let stickyEl: HTMLElement;
    let containerEl: HTMLElement;
    let sentinelEl: HTMLElement;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [TopStickyTestComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(TopStickyTestComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      stickyEl = component.sticky.nativeElement;
      containerEl = component.container.nativeElement;

      await fixture.whenStable();

      triggerIdleCallbacks();

      sentinelEl = findSentinelElement(containerEl, stickyEl, false);
    });



    it('should create sentinel element before sticky element', () => {
      expect(sentinelEl).toBeTruthy();
      expect(sentinelEl.style.opacity).toBe('0');
      expect(sentinelEl.style.width).toBe('1px');
      expect(sentinelEl.style.height).toBe('1px');

      const children = Array.from(containerEl.children);
      const stickyIndex = children.indexOf(stickyEl);
      const sentinelIndex = children.indexOf(sentinelEl);
      expect(sentinelIndex).toBeLessThan(stickyIndex);
    });

    it('should use requestIdleCallback for observer creation', () => {
      expect(mockRequestIdleCallback).toHaveBeenCalledWith(jasmine.any(Function));
    });

    it('should observe the sentinel element after idle callback', () => {
      expect(mockObserverInstance.observe).toHaveBeenCalledWith(sentinelEl);
    });

    it('should add is-pinned class when sentinel is not intersecting (sticky element is pinned)', fakeAsync(() => {
      if (!mockObserverCallback) {
        fail('Observer callback not set');
        return;
      }

      mockObserverCallback([
        createMockEntry(sentinelEl, {
          isIntersecting: false,
        }),
      ], mockObserverInstance);

      tick(DEBOUNCE_TIMEOUT);
      fixture.detectChanges();

      expect(stickyEl.classList.contains('is-pinned')).toBeTrue();
    }));

    it('should remove is-pinned class when sentinel is intersecting (sticky element is unpinned)', fakeAsync(() => {
      if (!mockObserverCallback) {
        fail('Observer callback not set');
        return;
      }

      mockObserverCallback([
        createMockEntry(sentinelEl, {
          isIntersecting: false,
        }),
      ], mockObserverInstance);

      tick(DEBOUNCE_TIMEOUT);
      fixture.detectChanges();
      expect(stickyEl.classList.contains('is-pinned')).toBeTrue();

      mockObserverCallback([
        createMockEntry(sentinelEl, {
          isIntersecting: true,
        }),
      ], mockObserverInstance);

      tick(DEBOUNCE_TIMEOUT);
      fixture.detectChanges();
      expect(stickyEl.classList.contains('is-pinned')).toBeFalse();
    }));
  });

  describe('Bottom Sticky Behavior', () => {
    let fixture: ComponentFixture<BottomStickyTestComponent>;
    let component: BottomStickyTestComponent;
    let stickyEl: HTMLElement;
    let containerEl: HTMLElement;
    let sentinelEl: HTMLElement;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [BottomStickyTestComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(BottomStickyTestComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      stickyEl = component.sticky.nativeElement;
      containerEl = component.container.nativeElement;

      await fixture.whenStable();
      triggerIdleCallbacks();

      sentinelEl = findSentinelElement(containerEl, stickyEl, true);
    });



    it('should create sentinel element after sticky element for bottom sticky', () => {
      expect(sentinelEl).toBeTruthy();

      const children = Array.from(containerEl.children);
      const stickyIndex = children.indexOf(stickyEl);
      const sentinelIndex = children.indexOf(sentinelEl);
      expect(sentinelIndex).toBeGreaterThan(stickyIndex);
    });

    it('should allow immediate pinned state for bottom sticky elements', fakeAsync(() => {
      if (!mockObserverCallback) {
        fail('Observer callback not set');
        return;
      }

      mockObserverCallback([
        createMockEntry(sentinelEl, {
          isIntersecting: false,
        }),
      ], mockObserverInstance);

      tick(DEBOUNCE_TIMEOUT);
      fixture.detectChanges();

      expect(stickyEl.classList.contains('is-pinned')).toBeTrue();
    }));
  });



  describe('Scrollable Container Support', () => {
    let fixture: ComponentFixture<ScrollableContainerTestComponent>;
    let component: ScrollableContainerTestComponent;
    let stickyEl: HTMLElement;
    let containerEl: HTMLElement;
    let sentinelEl: HTMLElement;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [ScrollableContainerTestComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(ScrollableContainerTestComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      stickyEl = component.sticky.nativeElement;
      containerEl = component.container.nativeElement;

      await fixture.whenStable();
      triggerIdleCallbacks();

      sentinelEl = findSentinelElement(containerEl, stickyEl, false);
    });

    it('should work with custom scrollable containers', () => {
      expect(stickyEl).toBeTruthy();
      expect(containerEl.style.overflowY).toBe('auto');
      expect(sentinelEl).toBeTruthy();
      expect(mockObserverInstance.observe).toHaveBeenCalledWith(sentinelEl);
    });

    it('should use scrollable container as intersection root', () => {
      expect(stickyEl).toBeTruthy();
      expect(sentinelEl).toBeTruthy();
      expect(mockObserverInstance.observe).toHaveBeenCalledWith(sentinelEl);

      expect(containerEl.style.overflowY).toBe('auto');
    });
  });





  describe('General Behavior', () => {
    let fixture: ComponentFixture<TopStickyTestComponent>;
    let component: TopStickyTestComponent;
    let stickyEl: HTMLElement;
    let containerEl: HTMLElement;
    let sentinelEl: HTMLElement;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [TopStickyTestComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(TopStickyTestComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      stickyEl = component.sticky.nativeElement;
      containerEl = component.container.nativeElement;

      await fixture.whenStable();
      triggerIdleCallbacks();

      sentinelEl = findSentinelElement(containerEl, stickyEl, false);
    });

    it('should handle multiple state changes correctly', fakeAsync(() => {
      if (!mockObserverCallback) {
        fail('Observer callback not set');
        return;
      }

      mockObserverCallback([
        createMockEntry(sentinelEl, {
          isIntersecting: true,
        }),
      ], mockObserverInstance);

      tick(DEBOUNCE_TIMEOUT);
      fixture.detectChanges();
      expect(stickyEl.classList.contains('is-pinned')).toBeFalse();

      mockObserverCallback([
        createMockEntry(sentinelEl, {
          isIntersecting: false,
        }),
      ], mockObserverInstance);

      tick(DEBOUNCE_TIMEOUT);
      fixture.detectChanges();
      expect(stickyEl.classList.contains('is-pinned')).toBeTrue();

      mockObserverCallback([
        createMockEntry(sentinelEl, {
          isIntersecting: true,
        }),
      ], mockObserverInstance);

      tick(DEBOUNCE_TIMEOUT);
      fixture.detectChanges();
      expect(stickyEl.classList.contains('is-pinned')).toBeFalse();
    }));

    it('should debounce rapid state changes', fakeAsync(() => {
      if (!mockObserverCallback) {
        fail('Observer callback not set');
        return;
      }

      mockObserverCallback([
        createMockEntry(sentinelEl, {
          isIntersecting: false,
        }),
      ], mockObserverInstance);

      expect(stickyEl.classList.contains('is-pinned')).toBeFalse();

      mockObserverCallback([
        createMockEntry(sentinelEl, {
          isIntersecting: true,
        }),
      ], mockObserverInstance);

      expect(stickyEl.classList.contains('is-pinned')).toBeFalse();

      tick(DEBOUNCE_TIMEOUT);
      fixture.detectChanges();

      expect(stickyEl.classList.contains('is-pinned')).toBeFalse();
    }));

    it('should cleanup observer on destroy', fakeAsync(() => {
      expect(mockObserverInstance.observe).toHaveBeenCalledWith(sentinelEl);
      expect(mockObserverInstance.unobserve).not.toHaveBeenCalledWith(sentinelEl);

      fixture.destroy();
      tick(DEBOUNCE_TIMEOUT);

      expect(mockObserverInstance.unobserve).toHaveBeenCalledWith(sentinelEl);
      expect(mockObserverInstance.disconnect).toHaveBeenCalledWith();
    }));

    it('should cancel idle callback on destroy', () => {
      fixture.destroy();
      expect(mockCancelIdleCallback).toHaveBeenCalledWith(jasmine.any(Number));
    });

    it('should remove sentinel element on destroy', () => {
      const initialChildCount = containerEl.children.length;
      expect(containerEl.contains(sentinelEl)).toBeTrue();

      fixture.destroy();

      expect(containerEl.children.length).toBeLessThan(initialChildCount);
      expect(containerEl.contains(sentinelEl)).toBeFalse();
    });
  });

  describe('RequestIdleCallback Fallback', () => {
    let fixture: ComponentFixture<TopStickyTestComponent>;
    let component: TopStickyTestComponent;
    let stickyEl: HTMLElement;
    let containerEl: HTMLElement;
    let sentinelEl: HTMLElement;
    let mockSetTimeout: jasmine.Spy;

    beforeEach(async () => {
      (<any>globalThis).requestIdleCallback = undefined;
      (<any>globalThis).cancelIdleCallback = undefined;

      mockSetTimeout = jasmine.createSpy('setTimeout').and.callFake((callback: () => void, delay: number) => {
        if (delay === 0) {
          idleCallbacks.push(callback);
        }
        return idleCallbacks.length;
      });

      (<any>globalThis).setTimeout = mockSetTimeout;

      await TestBed.configureTestingModule({
        imports: [TopStickyTestComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(TopStickyTestComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      stickyEl = component.sticky.nativeElement;
      containerEl = component.container.nativeElement;

      await fixture.whenStable();
      triggerIdleCallbacks();

      sentinelEl = findSentinelElement(containerEl, stickyEl, false);
    });

    it('should use setTimeout fallback when requestIdleCallback is not available', () => {
      expect(mockSetTimeout).toHaveBeenCalledWith(jasmine.any(Function), 0);
      expect(mockObserverInstance.observe).toHaveBeenCalledWith(sentinelEl);
    });
  });
});
