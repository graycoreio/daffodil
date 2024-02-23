import { InjectionToken } from '@angular/core';

import { DaffConfigInjectionToken } from './config.type';

/**
 * Creates an injection token/provider pair for a DI token that holds a configuration.
 *
 * See {@link DaffConfigInjectionToken}.
 */
export const createConfigInjectionToken = <T = unknown>(defaultConfig: T, ...args: ConstructorParameters<typeof InjectionToken<T>>): DaffConfigInjectionToken<T> => {
  const token = new InjectionToken<T>(
    args[0],
    {
      factory: () => defaultConfig,
      ...args[1],
    },
  );
  const provider = (config: Partial<T>) => ({
    provide: token,
    useValue: {
      ...defaultConfig,
      ...config,
    },
  });

  return {
    token,
    provider,
  };
};
