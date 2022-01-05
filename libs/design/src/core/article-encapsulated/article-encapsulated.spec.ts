import { ElementRef } from '@angular/core';

import {
  daffArticleEncapsulatedMixin,
  HasElementRef,
} from './article-encapsulated-mixin';

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

describe('daffArticleEncapsulatedMixin', () => {
  let instance;
  let manageContainerLayoutClass;

  beforeEach(() => {
    manageContainerLayoutClass = daffArticleEncapsulatedMixin(TestingClass);
    instance = new manageContainerLayoutClass();
  });


  it('should set a namespaced manage container layout class', () => {
    expect(instance.element.classList).toContain('daff-ae');
  });
});
