import {
  InjectionToken,
  Type,
} from '@angular/core';

import { DaffServicesInjectionToken } from './services.type';
import {
  TokenDesc,
  TokenOptions,
} from './token-constuctor-params.type';

// having a single instance of the default factory
// will hopefully reduce memory footprint
const defaultFactory = () => [];

/**
 * Creates an injection token/provider pair for a DI token that holds services.
 *
 * See {@link DaffServicesInjectionToken}.
 */
export const createServicesInjectionToken = <T = unknown>(
  desc: TokenDesc<Array<T>>,
  options?: Partial<TokenOptions<Array<T>>>,
): DaffServicesInjectionToken<T> => {
  const token = new InjectionToken<Array<T>>(
    desc,
    {
      factory: defaultFactory,
      ...options,
    },
  );
  const provider = <R extends T = T>(...classes: Array<Type<R>>) => classes.map((klass) => ({
    provide: token,
    useExisting: klass,
    multi: true,
  }));

  return {
    token,
    provider,
  };
};
