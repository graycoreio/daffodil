import { ElementRef } from '@angular/core';

import { daffTextAlignmentMixin } from './text-alignable-mixin';

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

describe('@daffodil/design | daffTextAlignmentMixin', () => {
  let instance;
  let classWithTextAlignment;

  beforeEach(() => {
    classWithTextAlignment = daffTextAlignmentMixin(TestingClass);
    instance = new classWithTextAlignment();
  });

  it('should add a text alignment property to an existing class', () => {
    expect('textAlignment' in instance).toBeTruthy();
  });

  it('should allow the consuming class to optionally define a default text alignment', () => {
    classWithTextAlignment = daffTextAlignmentMixin(TestingClass, 'center');
    instance = new classWithTextAlignment();

    expect(instance.textAlignment).toEqual('center');
    expect(instance.element.classList).toContain('daff-center');
  });

  describe('when a text alignment is specified', () => {

    it('should set a namespaced text alignment class', () => {
      instance.textAlignment = 'center';

      expect(instance.element.classList).toContain('daff-center');
    });
  });

  describe('when a text alignment is not specified', () => {

    it('should default to no text alignment class', () => {
      instance.textAlignment = undefined;
      expect(instance.element.classList.length).toEqual(0);
    });
  });

  describe('when `textAlignment` changes', () => {

    beforeEach(() => {
      instance.textAlignment = 'center';
      instance.textAlignment = 'left';
    });

    it('should add the new text alignment class', () => {
      expect(instance.element.classList).toContain('daff-left');
    });

    it('should remove the provious text alignment class', () => {
      expect(instance.element.classList).not.toContain('daff-center');
    });
  });

  describe('when a default text alignment is undefined', () => {
    describe('and text alignment is set to null or undefined', () => {
      it('should do nothing', () => {
        instance.textAlignment = null;
        expect(instance.element.classList.value).toEqual('');

        instance.textAlignment = undefined;
        expect(instance.element.classList.value).toEqual('');
      });
    });
  });

  describe('when a default text alignment is specified', () => {

    beforeEach(() => {
      classWithTextAlignment = daffTextAlignmentMixin(TestingClass, 'left');
      instance = new classWithTextAlignment();
    });

    describe('and text alignment is set to null or undefined', () => {
      it('should set text alignment to the default text alignment ', () => {
        instance.textAlignment = null;

        expect(instance.textAlignment).toEqual('left');
        expect(instance.element.classList).toContain('daff-left');

        instance.textAlignment = undefined;

        expect(instance.textAlignment).toEqual('left');
        expect(instance.element.classList).toContain('daff-left');
      });
    });
  });
});
