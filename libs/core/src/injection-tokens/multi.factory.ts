import { InjectionToken } from '@angular/core';

import { DaffMultiInjectionToken } from './multi.type';

/**
 * Creates an injection token/provider pair for a multi valued DI token.
 *
 * See {@link DaffMultiInjectionToken}.
 */
export const createMultiInjectionToken = <T = unknown>(...args: ConstructorParameters<typeof InjectionToken<Array<T>>>): DaffMultiInjectionToken<T> => {
  const token = new InjectionToken<Array<T>>(...args);
  const provider = (...values: Array<T>) => values.map((value) => ({
    provide: token,
    useValue: value,
    multi: true,
  }));

  return {
    token,
    provider,
  };
};
