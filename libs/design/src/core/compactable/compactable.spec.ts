import { ElementRef } from '@angular/core';

import { daffCompactableMixin } from './compactable-mixin';

class TestingClass {
  element: HTMLElement = document.createElement('div');

  _elementRef = new ElementRef<HTMLElement>(this.element);
  _renderer: any = {
    addClass: (el: HTMLElement, className: string) => {
      el.classList.add(className);
    },
    removeClass: (el: HTMLElement, className: string) => {
      el.classList.remove(className);
    },
  };
}

describe('daffCompactableMixin', () => {
  let instance;
  let classWithSkeleton;

  beforeEach(() => {
    classWithSkeleton = daffCompactableMixin(TestingClass);
    instance = new classWithSkeleton();
  });

  it('should add a compact property to an existing class', () => {
    expect('compact' in instance).toBeTruthy();
  });

  it('should set compact to false by default', () => {
    instance.compact = false;
    expect(instance.element.classList.length).toEqual(0);
  });

  describe('when compact is set to true', () => {
    it('should set a namespaced compact class', () => {
      instance.compact = true;

      expect(instance.element.classList).toContain('daff-compact');
    });
  });

  describe('when compact is set to false or not specified', () => {
    it('should default to no compact class', () => {
      instance.compact = false;
      expect(instance.element.classList.length).toEqual(0);

      instance.compact = undefined;
      expect(instance.element.classList.length).toEqual(0);
    });
  });
});
