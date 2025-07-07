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

      const children = Array.from(containerEl.children);
      const stickyIndex = children.indexOf(stickyEl);
      sentinelEl = <HTMLElement>children[stickyIndex - 1];

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

      tick(10);
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

      tick(10);
      fixture.detectChanges();
      expect(stickyEl.classList.contains('is-pinned')).toBeTrue();

      mockObserverCallback([
        createMockEntry(sentinelEl, {
          isIntersecting: true,
        }),
      ], mockObserverInstance);

      tick(10);
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

      const children = Array.from(containerEl.children);
      const stickyIndex = children.indexOf(stickyEl);
      sentinelEl = <HTMLElement>children[stickyIndex + 1];

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

      tick(10);
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

      const children = Array.from(containerEl.children);
      const stickyIndex = children.indexOf(stickyEl);
      sentinelEl = <HTMLElement>children[stickyIndex + 1];

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

      tick(10);
      fixture.detectChanges();

      expect(stickyEl.classList.contains('is-pinned')).toBeTrue();
    }));
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

      const children = Array.from(containerEl.children);
      const stickyIndex = children.indexOf(stickyEl);
      sentinelEl = <HTMLElement>children[stickyIndex - 1];

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

      tick(10);
      fixture.detectChanges();
      expect(stickyEl.classList.contains('is-pinned')).toBeFalse();

      mockObserverCallback([
        createMockEntry(sentinelEl, {
          isIntersecting: false,
        }),
      ], mockObserverInstance);

      tick(10);
      fixture.detectChanges();
      expect(stickyEl.classList.contains('is-pinned')).toBeTrue();

      mockObserverCallback([
        createMockEntry(sentinelEl, {
          isIntersecting: true,
        }),
      ], mockObserverInstance);

      tick(10);
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

      tick(10);
      fixture.detectChanges();

      expect(stickyEl.classList.contains('is-pinned')).toBeFalse();
    }));

    it('should cleanup observer on destroy', fakeAsync(() => {
      expect(mockObserverInstance.observe).toHaveBeenCalledWith(sentinelEl);
      expect(mockObserverInstance.unobserve).not.toHaveBeenCalledWith(sentinelEl);

      fixture.destroy();
      tick(10);

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
