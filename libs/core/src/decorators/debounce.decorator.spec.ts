import { Component } from '@angular/core';
import {
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { debounce } from './debounce.decorator';

describe('@daffodil/core | debounce', () => {
  let mockMethod: jasmine.Spy;
  let testClass: any;

  beforeEach(() => {
    mockMethod = jasmine.createSpy('mockMethod');

    class TestClass {
      @debounce(200)
      debouncedMethod(...args: any[]) {
        mockMethod(...args);
      }

      @debounce(500)
      quickDefaultMethod(...args: any[]) {
        mockMethod(...args);
      }
    }

    testClass = new TestClass();
  });

  it('should delay method execution', fakeAsync(() => {
    testClass.debouncedMethod('test');

    expect(mockMethod).not.toHaveBeenCalled();

    tick(200);
    expect(mockMethod).toHaveBeenCalledWith('test');
    expect(mockMethod).toHaveBeenCalledTimes(1);
  }));

  it('should debounce multiple rapid calls', fakeAsync(() => {
    testClass.debouncedMethod('call1');
    testClass.debouncedMethod('call2');
    testClass.debouncedMethod('call3');

    expect(mockMethod).not.toHaveBeenCalled();

    tick(200);
    expect(mockMethod).toHaveBeenCalledWith('call3');
    expect(mockMethod).toHaveBeenCalledTimes(1);
  }));

  it('should preserve method context', fakeAsync(() => {
    class ContextTest {
      value = 'context-value';

      @debounce(100)
      testContext() {
        mockMethod(this.value);
      }
    }

    const instance = new ContextTest();
    instance.testContext();

    tick(100);
    expect(mockMethod).toHaveBeenCalledWith('context-value');
  }));

  it('should use default delay when no parameter provided', fakeAsync(() => {
    testClass.quickDefaultMethod('default-test');

    tick(300);
    expect(mockMethod).not.toHaveBeenCalled();

    tick(200);
    expect(mockMethod).toHaveBeenCalledWith('default-test');
    expect(mockMethod).toHaveBeenCalledTimes(1);
  }));

  it('should cancel previous timeout when called again', fakeAsync(() => {
    testClass.debouncedMethod('first');

    tick(100);
    testClass.debouncedMethod('second');

    tick(150);
    expect(mockMethod).not.toHaveBeenCalled();

    tick(50);
    expect(mockMethod).toHaveBeenCalledWith('second');
    expect(mockMethod).toHaveBeenCalledTimes(1);
  }));

  describe('Angular Component host properties integration', () => {
    it('should work with @Component host properties for event handlers', fakeAsync(() => {
      const clickSpy = jasmine.createSpy('clickSpy');
      const hoverSpy = jasmine.createSpy('hoverSpy');

      @Component({
        selector: 'lib-test-component',
        template: '<div>Test Component</div>',
        host: {
          /* eslint-disable quote-props */
          '(click)': 'onDebouncedClick($event)',
          '(mouseover)': 'onDebouncedHover($event)',
          /* eslint-enable quote-props */
        },
      })
      class TestComponent {
        @debounce(300)
        onDebouncedClick(event: Event) {
          clickSpy(event);
        }

        @debounce(150)
        onDebouncedHover(event: Event) {
          hoverSpy(event);
        }
      }

      const component = new TestComponent();
      const mockEvent = new Event('click');

      component.onDebouncedClick(mockEvent);
      component.onDebouncedClick(mockEvent);
      component.onDebouncedClick(mockEvent);

      expect(clickSpy).not.toHaveBeenCalled();

      tick(300);
      expect(clickSpy).toHaveBeenCalledWith(mockEvent);
      expect(clickSpy).toHaveBeenCalledTimes(1);

      const mockHoverEvent = new Event('mouseover');
      component.onDebouncedHover(mockHoverEvent);

      tick(150);
      expect(hoverSpy).toHaveBeenCalledWith(mockHoverEvent);
      expect(hoverSpy).toHaveBeenCalledTimes(1);
    }));

    it('should work with @Component host properties for bindings', fakeAsync(() => {
      const updateClassSpy = jasmine.createSpy('updateClassSpy');

      @Component({
        selector: 'lib-test-dynamic-component',
        template: '<div>Dynamic Component</div>',
        host: {
          /* eslint-disable quote-props */
          '[class.active]': 'isActive',
          '(window:resize)': 'onDebouncedResize($event)',
          /* eslint-enable quote-props */
        },
      })
      class TestDynamicComponent {
        isActive = false;

        @debounce(250)
        onDebouncedResize(event: Event) {
          this.isActive = true;
          updateClassSpy(event);
        }
      }

      const component = new TestDynamicComponent();
      const mockResizeEvent = new Event('resize');

      expect(component.isActive).toBe(false);

      component.onDebouncedResize(mockResizeEvent);
      component.onDebouncedResize(mockResizeEvent);
      component.onDebouncedResize(mockResizeEvent);

      expect(updateClassSpy).not.toHaveBeenCalled();
      expect(component.isActive).toBe(false);

      tick(250);
      expect(updateClassSpy).toHaveBeenCalledWith(mockResizeEvent);
      expect(updateClassSpy).toHaveBeenCalledTimes(1);
      expect(component.isActive).toBe(true);
    }));
  });
});
