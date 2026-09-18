import { Observable } from 'rxjs';

import { createSingletonInjectionToken } from '@daffodil/core';
import { DaffProductCustomAttribute } from '@daffodil/product';

export const {
  /**
   * Injection token that serves as a placeholder for any service that implements the DaffProductCustomAttributeServiceInterface.
   */
  token: DaffProductCustomAttributeDriver,
  /**
   * Provider function for {@link DaffProductCustomAttributeDriver}.
   */
  provider: provideDaffProductCustomAttributeDriver,
} = createSingletonInjectionToken<DaffProductCustomAttributeServiceInterface>('DaffProductCustomAttributeDriver');

/**
 * An interface for any product custom attribute service drivers.
 */
export interface DaffProductCustomAttributeServiceInterface {
  /**
   * Get the list of all custom attribute definitions.
   */
  list(): Observable<DaffProductCustomAttribute[]>;
}
