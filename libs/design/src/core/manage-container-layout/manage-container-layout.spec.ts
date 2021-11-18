import { ElementRef } from '@angular/core';

import {
  daffManageContainerLayoutMixin,
  HasElementRef,
} from './manage-container-layout-mixin';

class TestingClass implements HasElementRef {
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

describe('daffManageContainerLayoutMixin', () => {
  let instance;
  let manageContainerLayoutClass;

  beforeEach(() => {
    manageContainerLayoutClass = daffManageContainerLayoutMixin(TestingClass);
    instance = new manageContainerLayoutClass();
  });


  it('should set a namespaced manage container layout class', () => {
    expect(instance.element.classList).toContain('daff-manage-container-layout');
  });
});
