/**
 * A utility decorator that delays method execution until after a specified delay period has elapsed since the last invocation.
 *
 * @param delay - The delay in milliseconds before the method executes. Defaults to 100ms.
 * @returns A method decorator that can be applied to class methods.
 *
 * @example Basic usage with custom delay
 * ```ts
 * import { debounce } from '@daffodil/core';
 *
 * class SearchComponent {
 *   @debounce(300)
 *   onSearchInput(value: string) {
 *     // Only executes after 300ms
 *     this.performSearch(value);
 *   }
 * }
 * ```
 *
 * @example Using default delay (100ms)
 * ```ts
 * class MyComponent {
 *   @debounce() // Uses 100ms default
 *   onInputChange(value: string) {
 *     console.log('Input changed:', value);
 *   }
 * }
 * ```
 *
 * @example Angular component integration
 * ```ts
 * import { Component } from '@angular/core';
 * import { debounce } from '@daffodil/core';
 *
 * @Component({
 *   selector: 'app-search',
 *   template: '<input (input)="onSearchInput($event.target.value)" />',
 * })
 * export class SearchComponent {
 *   @debounce(500)
 *   onSearchInput(value: string) {
 *     this.searchService.search(value);
 *   }
 * }
 * ```
 */
export const debounce = (delay: number = 100): MethodDecorator => (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor): PropertyDescriptor => {
  const originalMethod = descriptor.value;
  let timeoutId: any = null;

  descriptor.value = function(...args: any[]) {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }

    timeoutId = setTimeout(() => {
      originalMethod.apply(this, args);
      timeoutId = null;
    }, delay);
  };

  return descriptor;
};
