import { ElementRef } from '@angular/core';

import { daffSkeletonableMixin } from './skeletonable-mixin';

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

describe('daffSkeletonableMixin', () => {
  let instance;
  let classWithSkeleton;

  beforeEach(() => {
    classWithSkeleton = daffSkeletonableMixin(TestingClass);
    instance = new classWithSkeleton();
  });

  it('should add a skeleton property to an existing class', () => {
    expect('skeleton' in instance).toBeTruthy();
  });

  it('should set skeleton to false by default', () => {
    instance.skeleton = false;
    expect(instance.element.classList.length).toEqual(0);
  });

  describe('when skeleton is set to true', () => {
    it('should set a namespaced skeleton class', () => {
      instance.skeleton = true;

      expect(instance.element.classList).toContain('daff-skeleton');
    });
  });

  describe('when skeleton is set to false or not specified', () => {
    it('should default to no skeleton class', () => {
      instance.skeleton = false;
      expect(instance.element.classList.length).toEqual(0);

      instance.skeleton = undefined;
      expect(instance.element.classList.length).toEqual(0);
    });
  });
});
