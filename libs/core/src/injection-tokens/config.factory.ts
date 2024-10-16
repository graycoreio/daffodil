import {
  inject,
  InjectionToken,
} from '@angular/core';

import { DaffConfigInjectionToken } from './config.type';
import {
  TokenDesc,
  TokenOptions,
} from './token-constuctor-params.type';

/**
 * Creates an injection token/provider pair for a DI token that holds a configuration.
 *
 * See {@link DaffConfigInjectionToken}.
 */
export const createConfigInjectionToken = <T = unknown>(
  defaultConfig: T,
  desc: TokenDesc<T>,
  options?: Partial<TokenOptions<T>>,
): DaffConfigInjectionToken<T> => {
  const token = new InjectionToken<T>(
    desc,
    {
      factory: () => defaultConfig,
      ...options,
    },
  );
  const provider = <R extends T = T>(config: Partial<R> | InjectionToken<Partial<R>>) => ({
    provide: token,
    useFactory: () => ({
      ...defaultConfig,
      ...(config instanceof InjectionToken ? inject(config) : config),
    }),
  });

  return {
    token,
    provider,
  };
};
