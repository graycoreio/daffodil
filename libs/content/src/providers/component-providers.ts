import {
  InjectionToken,
  Provider,
} from '@angular/core';

import { ComponentRegistration } from './component-registration';

/**
 * @docs-private
 */
export const _DYNAMIC_COMPONENT = new InjectionToken<ComponentRegistration>(
  'DYNAMIC_COMPONENT',
  {
    providedIn: 'root',
    factory: () => <any>[],
  },
);

/**
 * Provides component registrations for use with the content schema renderer.
 * Accepts a single registration or an array of registrations.
 *
 * @example
 * ```ts
 * // Single registration
 * provideDynamicComponent({
 *   componentType: MyComponent,
 *   name: 'MyComponent'
 * })
 *
 * // Multiple registrations
 * provideDynamicComponent([
 *   { componentType: ComponentA, name: 'ComponentA' },
 *   { componentType: ComponentB, name: 'ComponentB' }
 * ])
 * ```
 */
export const provideDynamicComponent = (registration: ComponentRegistration | ComponentRegistration[]): Provider[] =>
  (Array.isArray(registration) ? registration : [registration]).map((r) => ({
    provide: _DYNAMIC_COMPONENT,
    multi: true,
    useValue: r,
  }));
