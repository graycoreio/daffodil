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

const DEBOUNCE_TIMEOUT = 10;

@Component({
  standalone: true,
  imports: [DaffStickyTrackerDirective],
  template: `
    <div #container style="height: 200vh;">
      <div #sticky
           daffStickyTracker
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
    <div #container style="height: 200vh;">
      <div style="height: 100vh;">Content above</div>
      <div #sticky
           daffStickyTracker
           style="position: sticky; bottom: 0; height: 50px; background: green;">
        Bottom Sticky Last Child
      </div>
    </div>
  `,
})
class BottomStickyLastChildTestComponent {
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

@Component({
  standalone: true,
  imports: [DaffStickyTrackerDirective],
  template: `
    <div #container style="height: 200vh;">
      <div #sticky1
           daffStickyTracker
           style="position: sticky; top: 0; height: 50px; background: red;">
        First Sticky Element
      </div>
      <div style="height: 50vh;">Content between</div>
      <div #sticky2
           daffStickyTracker
           style="position: sticky; top: 60px; height: 50px; background: blue;">
        Second Sticky Element
      </div>
      <div style="height: 100vh;">Content below</div>
    </div>
  `,
})
class MultipleStickyTestComponent {
  @ViewChild('sticky1', { static: true }) sticky1!: ElementRef<HTMLElement>;
  @ViewChild('sticky2', { static: true }) sticky2!: ElementRef<HTMLElement>;
  @ViewChild('container', { static: true }) container!: ElementRef<HTMLElement>;
}

@Component({
  standalone: true,
  imports: [DaffStickyTrackerDirective],
  template: `
    <div #container style="height: 200vh;">
      <div #sticky
           daffStickyTracker
           style="position: sticky; top: 0; height: 50px; background: orange;">
        Pre-styled Sticky Element
      </div>
      <div style="height: 100vh;">Content below</div>
    </div>
  `,
})
class PreStyledStickyTestComponent {
  @ViewChild('sticky', { static: true }) sticky!: ElementRef<HTMLElement>;
  @ViewChild('container', { static: true }) container!: ElementRef<HTMLElement>;
}

@Component({
  standalone: true,
  template: `
    <div daffStickyTracker style="position: sticky; top: 0;">
      Orphaned Sticky Element
    </div>
  `,
})
class OrphanedStickyTestComponent {}

describe('DaffStickyTrackerDirective', () => {
  let mockObserverCallback: IntersectionObserverCallback | undefined;
  let mockObserverInstance: jasmine.SpyObj<IntersectionObserver>;
  let originalIntersectionObserver: any;

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

  beforeEach(() => {
    originalIntersectionObserver = (<any>globalThis).IntersectionObserver;

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
  });

  afterEach(() => {
    (<any>globalThis).IntersectionObserver = originalIntersectionObserver;
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
      sentinelEl = findSentinelElement(containerEl, stickyEl, false);

      await fixture.whenStable();
    });

    it('should create the directive and setup sticky positioning', () => {
      expect(stickyEl).toBeTruthy();
      expect(stickyEl.style.position).toBe('sticky');
      expect(stickyEl.style.top).toBe('0px');
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

    it('should observe the sentinel element', () => {
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
      sentinelEl = findSentinelElement(containerEl, stickyEl, true);

      await fixture.whenStable();
    });

    it('should setup bottom sticky positioning', () => {
      expect(stickyEl.style.position).toBe('sticky');
      expect(stickyEl.style.bottom).toBe('0px');
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

  describe('Bottom Sticky Last Child Behavior', () => {
    let fixture: ComponentFixture<BottomStickyLastChildTestComponent>;
    let component: BottomStickyLastChildTestComponent;
    let stickyEl: HTMLElement;
    let containerEl: HTMLElement;
    let sentinelEl: HTMLElement;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [BottomStickyLastChildTestComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(BottomStickyLastChildTestComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      stickyEl = component.sticky.nativeElement;
      containerEl = component.container.nativeElement;
      sentinelEl = findSentinelElement(containerEl, stickyEl, true);

      await fixture.whenStable();
    });

    it('should create sentinel after sticky element (consistent with standard bottom sticky)', () => {
      expect(sentinelEl).toBeTruthy();

      const children = Array.from(containerEl.children);
      const stickyIndex = children.indexOf(stickyEl);
      const sentinelIndex = children.indexOf(sentinelEl);
      expect(sentinelIndex).toBeGreaterThan(stickyIndex);
    });

    it('should allow immediate pinned state (consistent behavior with standard bottom sticky)', fakeAsync(() => {
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

  describe('Performance Optimizations', () => {
    let fixture: ComponentFixture<TopStickyTestComponent>;
    let getComputedStyleSpy: jasmine.Spy;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [TopStickyTestComponent],
      }).compileComponents();

      if (document.defaultView) {
        getComputedStyleSpy = spyOn(document.defaultView, 'getComputedStyle').and.callThrough();
      }
    });

    it('should batch getComputedStyle calls to minimize forced reflows', () => {
      fixture = TestBed.createComponent(TopStickyTestComponent);
      const callCountBefore = getComputedStyleSpy.calls.count();

      fixture.detectChanges();

      const callCountAfter = getComputedStyleSpy.calls.count();
      const totalCalls = callCountAfter - callCountBefore;

      expect(totalCalls).toBeGreaterThan(0);
      expect(totalCalls).toBeLessThan(10);
    });

    it('should not call getComputedStyle multiple times for the same element during initialization', () => {
      fixture = TestBed.createComponent(TopStickyTestComponent);
      const stickyEl = fixture.componentInstance.sticky.nativeElement;

      getComputedStyleSpy.calls.reset();
      fixture.detectChanges();

      const stickyElementCalls = getComputedStyleSpy.calls.all().filter(call =>
        call.args[0] === stickyEl,
      ).length;

      expect(stickyElementCalls).toBe(1);
    });
  });

  describe('Error Handling', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [TopStickyTestComponent],
      }).compileComponents();
    });

    it('should handle missing document.defaultView gracefully', () => {
      const originalDefaultView = document.defaultView;

      try {
        Object.defineProperty(document, 'defaultView', {
          value: null,
          writable: true,
          configurable: true,
        });

        expect(() => {
          const fixture = TestBed.createComponent(TopStickyTestComponent);
          fixture.detectChanges();
        }).toThrowError('DaffStickyTracker: Document default view is not available');
      } finally {
        Object.defineProperty(document, 'defaultView', {
          value: originalDefaultView,
          writable: true,
          configurable: true,
        });
      }
    });
  });

  describe('Edge Cases and Integration Tests', () => {
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
        sentinelEl = findSentinelElement(containerEl, stickyEl, false);

        await fixture.whenStable();
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

    describe('Multiple Sticky Elements', () => {
      let fixture: ComponentFixture<MultipleStickyTestComponent>;
      let component: MultipleStickyTestComponent;
      let sticky1El: HTMLElement;
      let sticky2El: HTMLElement;
      let containerEl: HTMLElement;

      beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [MultipleStickyTestComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(MultipleStickyTestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        sticky1El = component.sticky1.nativeElement;
        sticky2El = component.sticky2.nativeElement;
        containerEl = component.container.nativeElement;

        await fixture.whenStable();
      });

      it('should handle multiple sticky elements independently', () => {
        expect(sticky1El.style.position).toBe('sticky');
        expect(sticky1El.style.top).toBe('0px');

        expect(sticky2El.style.position).toBe('sticky');
        expect(sticky2El.style.top).toBe('60px');

        const sentinels = Array.from(containerEl.querySelectorAll('div')).filter(el => {
          const htmlEl = <HTMLElement>el;
          return htmlEl.style.width === '1px' &&
                 htmlEl.style.height === '1px' &&
                 htmlEl.style.opacity === '0';
        });

        expect(sentinels.length).toBe(2);
      });

      it('should observe both sentinel elements', () => {
        expect(mockObserverInstance.observe).toHaveBeenCalledTimes(2);
      });
    });

    describe('Pre-styled Elements', () => {
      let fixture: ComponentFixture<PreStyledStickyTestComponent>;
      let component: PreStyledStickyTestComponent;
      let stickyEl: HTMLElement;

      beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [PreStyledStickyTestComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PreStyledStickyTestComponent);
        component = fixture.componentInstance;

        stickyEl = component.sticky.nativeElement;
        stickyEl.style.position = 'sticky';
        stickyEl.style.top = '10px';

        fixture.detectChanges();
        await fixture.whenStable();
      });

      it('should respect existing sticky positioning', () => {
        expect(stickyEl.style.position).toBe('sticky');
        expect(stickyEl.style.top).toBe('10px');
      });

      it('should not override existing position styles', () => {
        expect(stickyEl.style.top).not.toBe('0px');
      });
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
      sentinelEl = findSentinelElement(containerEl, stickyEl, false);

      await fixture.whenStable();
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

    it('should remove sentinel element on destroy', () => {
      const initialChildCount = containerEl.children.length;
      expect(containerEl.contains(sentinelEl)).toBeTrue();

      fixture.destroy();

      expect(containerEl.children.length).toBeLessThan(initialChildCount);
      expect(containerEl.contains(sentinelEl)).toBeFalse();
    });
  });
});
