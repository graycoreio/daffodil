import {
  inject,
  InjectionToken,
} from '@angular/core';

import { DaffConfigInjectionToken } from './config.type';
import {
  TokenDesc,
  TokenOptions,
} from './token-constuctor-params.type';
import { RequiredProperties } from '../types/public_api';

/**
 * Creates an injection token/provider pair for a DI token that holds a configuration.
 *
 * See {@link DaffConfigInjectionToken}.
 */
export const createConfigInjectionToken = <T = unknown, TDefault extends Partial<T> = Partial<T>>(
  defaultConfig: TDefault | InjectionToken<TDefault>,
  desc: TokenDesc<T>,
  options?: Partial<TokenOptions<T>>,
): DaffConfigInjectionToken<T, TDefault> => {
  const token = new InjectionToken<T>(
    desc,
    {
      factory: () => null,
      ...options,
    },
  );
  const provider = <R extends
    Omit<T, RequiredProperties<TDefault>> & Partial<Pick<TDefault, RequiredProperties<TDefault>>>
  = Omit<T, RequiredProperties<TDefault>> & Partial<Pick<TDefault, RequiredProperties<TDefault>>>>(config: R | InjectionToken<R>) => ({
    provide: token,
    useFactory: () => ({
      ...(defaultConfig instanceof InjectionToken ? inject(defaultConfig) : defaultConfig),
      ...(config instanceof InjectionToken ? inject(config) : config),
    }),
  });

  return {
    token,
    provider,
  };
};
