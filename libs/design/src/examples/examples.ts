import { Type } from '@angular/core';

/**
 * An example of a component with a specified module.
 */
export interface ComponentExampleWithModule {
  component: Type<any>;
  module: any;
}

/**
 * An example of a component
 */
export type ComponentExample = ComponentExampleWithModule | Type<any>;
