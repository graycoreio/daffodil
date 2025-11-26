import { Type } from '@angular/core';

/**
 * Registers an Angular component for use in the content schema renderer.
 * Components must be registered before they can be referenced by name in a schema.
 *
 * @example
 * ```ts
 * const buttonRegistration: ComponentRegistration = {
 *   componentType: DaffButtonComponent,
 *   name: 'DaffButtonComponent',
 *   description: 'A styled button component',
 * };
 * ```
 */
export interface ComponentRegistration {
  /** The Angular component class to register. */
  componentType: Type<any>;
  /** The unique name used to reference this component in the schema. */
  name: string;
  /** An optional description of the component for documentation purposes. */
  description?: string;
  /** Optional nested component registrations for grouping related components. */
  children?: ComponentRegistration[];
}
