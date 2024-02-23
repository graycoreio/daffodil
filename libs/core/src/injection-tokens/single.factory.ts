import { InjectionToken } from '@angular/core';

import { DaffSingleInjectionToken } from './single.type';

/**
 * Creates an injection token/provider pair for a single valued DI token.
 *
 * See {@link DaffSingleInjectionToken}.
 */
export const createSingleInjectionToken = <T = unknown>(...args: ConstructorParameters<typeof InjectionToken<T>>): DaffSingleInjectionToken<T> => {
  const token = new InjectionToken<T>(...args);
  const provider = <R extends T = T>(value: R) => ({
    provide: token,
    useValue: value,
  });

  return {
    token,
    provider,
  };
};
