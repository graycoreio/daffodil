import { createMultiInjectionToken } from '@daffodil/core';

export const {
  /**
   * A multi-provider injection token of the operation names of magento queries that should
   * be cached. This is needed because queries need to be converted into GET queries in order for Magento
   * to cache them. This token should be used by daffodil driver platform modules to register operation names that are cacheable, and is
   * intended for internal daffodil use only.
   */
  token: DAFF_MAGENTO_CACHEABLE_OPERATIONS,
  /**
   * Adds many operation names to the list of cacheable Magento operations. Use only with Angular 9+.
   */
  provider: provideManyDaffMagentoCacheableOperations,
} = createMultiInjectionToken<string>('DAFF_MAGENTO_CACHEABLE_OPERATIONS');

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
