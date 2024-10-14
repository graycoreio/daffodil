import {
  InjectionToken,
  Type,
} from '@angular/core';

import { DaffSingletonInjectionToken } from './singleton.type';
import {
  TokenDesc,
  TokenOptions,
} from './token-constuctor-params.type';

/**
 * Creates an injection token/provider pair for a DI token that holds a singleton service.
 *
 * See {@link DaffSingletonInjectionToken}.
 */
export const createSingletonInjectionToken = <T = unknown>(
  desc: TokenDesc<T>,
  options?: TokenOptions<T>,
): DaffSingletonInjectionToken<T> => {
  const token = new InjectionToken<T>(
    desc,
    options,
  );
  const provider = <R extends T = T>(klass: Type<R>) => ({
    provide: token,
    useExisting: klass,
  });

  return {
    token,
    provider,
  };
};
