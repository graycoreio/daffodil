// import { ElementRef } from '@angular/core';

// import {
//   daffSelectableMixin,
//   HasElementRef,
// } from './selectable-mixin';

// class TestingClass implements HasElementRef {
//   element: HTMLElement = document.createElement('div');

//   _elementRef = new ElementRef<HTMLElement>(this.element);
//   _renderer: any = {
//     addClass: (el: HTMLElement, className: string) => {
//       el.classList.add(className);
//     },
//     removeClass: (el: HTMLElement, className: string) => {
//       el.classList.remove(className);
//     },
//   };
// }

// describe('@daffodil/design | daffSelectableMixin', () => {
//   let instance;
//   let classWithSkeleton;

//   beforeEach(() => {
//     classWithSkeleton = daffSelectableMixin(TestingClass);
//     instance = new classWithSkeleton();
//   });

//   it('should add a selected property to an existing class', () => {
//     expect('selected' in instance).toBeTruthy();
//   });

//   it('should set selected to false by default', () => {
//     expect(instance.element.classList.length).toEqual(0);
//   });

//   describe('when selected is set to true', () => {
//     it('should set a namespaced selected class', () => {
//       instance.selected = true;

//       expect(instance.element.classList).toContain('daff-selected');
//     });
//   });

//   describe('when selected is set to false or not specified', () => {
//     it('should default to no selected class', () => {
//       instance.selected = false;
//       expect(instance.element.classList.length).toEqual(0);

//       instance.selected = undefined;
//       expect(instance.element.classList.length).toEqual(0);
//     });
//   });
// });
