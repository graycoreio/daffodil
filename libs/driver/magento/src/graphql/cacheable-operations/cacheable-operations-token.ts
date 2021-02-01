import { InjectionToken } from '@angular/core';

/**
 * A multi-provider injection token of the operation names of magento queries that should
 * be cached. This is needed because queries need to be converted into GET queries in order for Magento
 * to cache them. This token should be used by daffodil driver platform modules to register operation names that are cacheable, and is
 * intended for internal daffodil use only.
 */
export const DAFF_MAGENTO_CACHEABLE_OPERATIONS = new InjectionToken<string[]>('DAFF_MAGENTO_CACHEABLE_OPERATIONS', { factory: () => []});

/**
 * Adds an operation name to the list of cacheable Magento operations. Use only with Angular 9+.
 */
export function provideDaffMagentoCacheableOperation(operationName: string) {
  return {
    provide: DAFF_MAGENTO_CACHEABLE_OPERATIONS,
    useValue: operationName,
    multi: true,
  };
}

/**
 * Adds many operation names to the list of cacheable Magento operations. Use only with Angular 9+.
 */
export function provideManyDaffMagentoCacheableOperations(...operationNames: string[]) {
  return operationNames.map(name => ({
    provide: DAFF_MAGENTO_CACHEABLE_OPERATIONS,
    useValue: name,
    multi: true,
  }));
}
