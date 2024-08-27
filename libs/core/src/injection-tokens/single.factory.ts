import { InjectionToken } from '@angular/core';

import { DaffSingleInjectionToken } from './single.type';
import {
  TokenDesc,
  TokenOptions,
} from './token-constuctor-params.type';

/**
 * Creates an injection token/provider pair for a single valued DI token.
 *
 * See {@link DaffSingleInjectionToken}.
 */
export const createSingleInjectionToken = <T = unknown>(
  desc: TokenDesc<T>,
  options?: TokenOptions<T>,
): DaffSingleInjectionToken<T> => {
  const token = new InjectionToken<T>(desc, options);
  const provider = <R extends T = T>(value: R) => ({
    provide: token,
    useValue: value,
  });

  return {
    token,
    provider,
  };
};
