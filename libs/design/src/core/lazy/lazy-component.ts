import { Type } from '@angular/core';

/**
 * A definition for a lazy component.
 */
export interface DaffLazyComponent {
  import: () => Promise<Type<unknown>>;
};
