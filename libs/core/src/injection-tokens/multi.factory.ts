import { InjectionToken } from '@angular/core';

import { DaffMultiInjectionToken } from './multi.type';
import {
  TokenDesc,
  TokenOptions,
} from './token-constuctor-params.type';

// having a single instance of the default factory
// will hopefully reduce memory footprint
const defaultFactory = () => [];

/**
 * Creates an injection token/provider pair for a multi valued DI token.
 *
 * See {@link DaffMultiInjectionToken}.
 */
export const createMultiInjectionToken = <T = unknown>(
  desc: TokenDesc<Array<T>>,
  options?: Partial<TokenOptions<Array<T>>>,
): DaffMultiInjectionToken<T> => {
  const token = new InjectionToken<Array<T>>(
    desc,
    {
      factory: defaultFactory,
      ...options,
    },
  );
  const provider = <R extends T = T>(...values: Array<R>) => values.map((value) => ({
    provide: token,
    useValue: value,
    multi: true,
  }));

  return {
    token,
    provider,
  };
};
