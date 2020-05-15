import { daffSizeMixin } from './sizeable-mixin';
import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';

class TestingClass {
  element: HTMLElement = document.createElement('div');

  _elementRef = new ElementRef<HTMLElement>(this.element);
  _renderer : any = { 
    addClass(el: HTMLElement, className: string) {
      el.classList.add(className);
    },
    removeClass(el: HTMLElement, className: string) {
      el.classList.remove(className);
    }
  } 
}

describe('daffSizeMixin', () => {
  let instance;
  let classWithSize;

  beforeEach(() => {
    classWithSize = daffSizeMixin(TestingClass);
    instance = new classWithSize();
  });

  it('should add a size property to an existing class', () => {
      expect('size' in instance).toBeTruthy();
  });

  it('should allow the consuming class to optionally define a default size', () => {
    classWithSize = daffSizeMixin(TestingClass, 'sm');
    instance = new classWithSize();

    expect(instance.size).toEqual('sm');
    expect(instance.element.classList).toContain('daff-sm');
  });

  describe('when a size is specified', () => {
    
    it('should set a namespaced size class', () => {
      instance.size = 'sm';

      expect(instance.element.classList).toContain('daff-sm');
    });
  });

  describe('when a size is not specified', () => {
    
    it('should default to no size class', () => {
      instance.size = undefined;
      expect(instance.element.classList.length).toEqual(0);
    });
  });

  describe('when `size` changes', () => {

    beforeEach(() => {
      instance.size = 'sm';
      expect(instance.element.classList).toContain('daff-sm');

      instance.size = 'md';
    });
    
    it('should add the new size class', () => {
      expect(instance.element.classList).toContain('daff-md');
    });

    it('should remove the provious size class', () => {
      expect(instance.element.classList).not.toContain('daff-sm');
    });
  });

  describe('when a default size is undefined', () => {
    describe('and size is set to null or undefined', () => {
      it('should do nothing', () => {
        instance.size = null;
        expect(instance.element.classList.value).toEqual('');

        instance.size = undefined;
        expect(instance.element.classList.value).toEqual('');
      });
    });
  });

  describe('when a default size is specified', () => {

    beforeEach(() => {
      classWithSize = daffSizeMixin(TestingClass, 'sm');
      instance = new classWithSize();
    });

    describe('and size is set to null or undefined', () => {
      it('should set size to the default size ', () => {
        instance.size = null;

        expect(instance.size).toEqual('sm');
        expect(instance.element.classList).toContain('daff-sm');

        instance.size = undefined;

        expect(instance.size).toEqual('sm');
        expect(instance.element.classList).toContain('daff-sm');
      });
    })
  })
});
