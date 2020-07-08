import { daffStatusMixin } from './statusable-mixin';
import { ElementRef } from '@angular/core';

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

describe('daffStatusMixin', () => {
  let instance;
  let classWithStatus;

  beforeEach(() => {
    classWithStatus = daffStatusMixin(TestingClass);
    instance = new classWithStatus();
  });

  it('should add a status property to an existing class', () => {
      expect('status' in instance).toBeTruthy();
  });

  it('should allow the consuming class to optionally define a default status', () => {
    classWithStatus = daffStatusMixin(TestingClass, 'warn');
    instance = new classWithStatus();

    expect(instance.status).toEqual('warn');
    expect(instance.element.classList).toContain('daff-warn');
  });

  describe('when a status is specified', () => {
    
    it('should set a namespaced status class', () => {
      instance.status = 'warn';

      expect(instance.element.classList).toContain('daff-warn');
    });
  });

  describe('when a status is not specified', () => {
    
    it('should default to no status class', () => {
      instance.status = undefined;
      expect(instance.element.classList.length).toEqual(0);
    });
  });

  describe('when `status` changes', () => {

    beforeEach(() => {
      instance.status = 'warn';
      expect(instance.element.classList).toContain('daff-warn');

      instance.status = 'error';
    });
    
    it('should add the new status class', () => {
      expect(instance.element.classList).toContain('daff-error');
    });

    it('should remove the provious status class', () => {
      expect(instance.element.classList).not.toContain('daff-warn');
    });
  });

  describe('when a default status is undefined', () => {
    describe('and status is set to null or undefined', () => {
      it('should do nothing', () => {
        instance.status = null;
        expect(instance.element.classList.value).toEqual('');

        instance.status = undefined;
        expect(instance.element.classList.value).toEqual('');
      });
    });
  });

  describe('when a default status is specified', () => {

    beforeEach(() => {
      classWithStatus = daffStatusMixin(TestingClass, 'warn');
      instance = new classWithStatus();
    });

    describe('and status is set to null or undefined', () => {
      it('should set status to the default status ', () => {
        instance.status = null;

        expect(instance.status).toEqual('warn');
        expect(instance.element.classList).toContain('daff-warn');

        instance.status = undefined;

        expect(instance.status).toEqual('warn');
        expect(instance.element.classList).toContain('daff-warn');
      });
    })
  })
});
