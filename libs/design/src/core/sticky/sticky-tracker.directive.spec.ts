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
import { By } from '@angular/platform-browser';

import { DaffStickyTrackerDirective } from './sticky-tracker.directive';

@Component({
  standalone: true,
  imports: [DaffStickyTrackerDirective],
  template: `
    <div style="height: 200vh;">
      <div #sticky
           daffStickyTracker
           style="position: sticky; top: 0; height: 50px; background: red;">
        Sticky Element
      </div>
      <div style="height: 100vh;">Content below</div>
    </div>
  `,
})
class TestComponent {
  @ViewChild('sticky', { static: true }) sticky!: ElementRef<HTMLElement>;
}

describe('DaffStickyTrackerDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let stickyEl: HTMLElement;
  let directiveInstance: DaffStickyTrackerDirective;
  let mockObserverCallback: IntersectionObserverCallback | undefined;
  let mockObserverInstance: jasmine.SpyObj<IntersectionObserver>;
  let originalIntersectionObserver: any;

  const createMockEntry = (
    overrides: Partial<IntersectionObserverEntry>,
  ): IntersectionObserverEntry => ({
    boundingClientRect: <DOMRectReadOnly>{},
    intersectionRatio: 1,
    intersectionRect: <DOMRectReadOnly>{},
    isIntersecting: true,
    rootBounds: null,
    target: stickyEl,
    time: 0,
    ...overrides,
  });

  beforeEach(async () => {
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

    await TestBed.configureTestingModule({
      imports: [TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    const directiveDebugEl = fixture.debugElement.query(By.directive(DaffStickyTrackerDirective));
    directiveInstance = directiveDebugEl.injector.get(DaffStickyTrackerDirective);
    stickyEl = directiveDebugEl.nativeElement;

    await fixture.whenStable();
  });

  afterEach(() => {
    (<any>globalThis).IntersectionObserver = originalIntersectionObserver;
  });

  it('should create the directive', () => {
    expect(directiveInstance).toBeTruthy();
    expect(stickyEl).toBeTruthy();
  });

  it('should create IntersectionObserver on init', () => {
    expect(mockObserverInstance.observe).toHaveBeenCalledWith(stickyEl);
  });

  it('should set up sticky element with position sticky and appropriate top value', () => {
    expect(stickyEl.style.position).toBe('sticky');
    expect(stickyEl.style.top).toBe('0px');
  });

  it('should add is-pinned class when element is not fully visible (intersectionRatio < 1)', fakeAsync(() => {
    if (!mockObserverCallback) {
      fail('Observer callback not set');
      return;
    }

    mockObserverCallback([
      createMockEntry({ intersectionRatio: 0.99, isIntersecting: true }),
    ], mockObserverInstance);

    tick(10);
    fixture.detectChanges();

    expect(stickyEl.classList.contains('is-pinned')).toBeTrue();
  }));

  it('should add is-pinned class when element is completely out of view', fakeAsync(() => {
    if (!mockObserverCallback) {
      fail('Observer callback not set');
      return;
    }

    mockObserverCallback([
      createMockEntry({ intersectionRatio: 0, isIntersecting: false }),
    ], mockObserverInstance);

    tick(10);
    fixture.detectChanges();

    expect(stickyEl.classList.contains('is-pinned')).toBeTrue();
  }));

  it('should remove is-pinned class when element is fully visible (intersectionRatio = 1)', fakeAsync(() => {
    if (!mockObserverCallback) {
      fail('Observer callback not set');
      return;
    }

    mockObserverCallback([
      createMockEntry({ intersectionRatio: 0.5, isIntersecting: true }),
    ], mockObserverInstance);

    tick(10);
    fixture.detectChanges();
    expect(stickyEl.classList.contains('is-pinned')).toBeTrue();

    mockObserverCallback([
      createMockEntry({ intersectionRatio: 1, isIntersecting: true }),
    ], mockObserverInstance);

    tick(10);
    fixture.detectChanges();
    expect(stickyEl.classList.contains('is-pinned')).toBeFalse();
  }));

  it('should handle multiple state changes correctly', fakeAsync(() => {
    if (!mockObserverCallback) {
      fail('Observer callback not set');
      return;
    }

    mockObserverCallback([
      createMockEntry({ intersectionRatio: 1, isIntersecting: true }),
    ], mockObserverInstance);

    tick(10);
    fixture.detectChanges();
    expect(stickyEl.classList.contains('is-pinned')).toBeFalse();

    mockObserverCallback([
      createMockEntry({ intersectionRatio: 0.8, isIntersecting: true }),
    ], mockObserverInstance);

    tick(10);
    fixture.detectChanges();
    expect(stickyEl.classList.contains('is-pinned')).toBeTrue();

    mockObserverCallback([
      createMockEntry({ intersectionRatio: 1, isIntersecting: true }),
    ], mockObserverInstance);

    tick(10);
    fixture.detectChanges();
    expect(stickyEl.classList.contains('is-pinned')).toBeFalse();
  }));

  it('should cleanup observer on destroy', fakeAsync(() => {
    expect(mockObserverInstance.observe).toHaveBeenCalledWith(stickyEl);
    expect(mockObserverInstance.unobserve).not.toHaveBeenCalledWith(stickyEl);

    fixture.destroy();
    tick(10);
    expect(mockObserverInstance.unobserve).toHaveBeenCalledWith(stickyEl);
    expect(mockObserverInstance.disconnect).toHaveBeenCalledWith();
  }));

  it('should handle edge case when intersectionRatio is exactly 0', fakeAsync(() => {
    if (!mockObserverCallback) {
      fail('Observer callback not set');
      return;
    }

    mockObserverCallback([
      createMockEntry({ intersectionRatio: 0, isIntersecting: false }),
    ], mockObserverInstance);

    tick(10);
    fixture.detectChanges();

    expect(stickyEl.classList.contains('is-pinned')).toBeTrue();
  }));

  it('should handle edge case when intersectionRatio is exactly 1', fakeAsync(() => {
    if (!mockObserverCallback) {
      fail('Observer callback not set');
      return;
    }

    mockObserverCallback([
      createMockEntry({ intersectionRatio: 1, isIntersecting: true }),
    ], mockObserverInstance);

    tick(10);
    fixture.detectChanges();

    expect(stickyEl.classList.contains('is-pinned')).toBeFalse();
  }));

  it('should handle edge case when intersectionRatio is between 0 and 1', fakeAsync(() => {
    if (!mockObserverCallback) {
      fail('Observer callback not set');
      return;
    }

    mockObserverCallback([
      createMockEntry({ intersectionRatio: 0.1, isIntersecting: true }),
    ], mockObserverInstance);

    tick(10);
    fixture.detectChanges();

    expect(stickyEl.classList.contains('is-pinned')).toBeTrue();
  }));

  it('should debounce rapid state changes', fakeAsync(() => {
    if (!mockObserverCallback) {
      fail('Observer callback not set');
      return;
    }

    mockObserverCallback([
      createMockEntry({ intersectionRatio: 0.5, isIntersecting: true }),
    ], mockObserverInstance);

    expect(stickyEl.classList.contains('is-pinned')).toBeFalse();

    mockObserverCallback([
      createMockEntry({ intersectionRatio: 1, isIntersecting: true }),
    ], mockObserverInstance);

    expect(stickyEl.classList.contains('is-pinned')).toBeFalse();

    tick(10);
    fixture.detectChanges();

    expect(stickyEl.classList.contains('is-pinned')).toBeFalse();
  }));
});
