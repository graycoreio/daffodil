import {
  InjectionToken,
  Provider,
} from '@angular/core';

import { DaffMultiTokenProviderPair } from './multi-token-provider-pair.interface';

/**
 * Creates a multi token and provider pair.
 *
 * The token's value is defaulted to an empty array.
 */
export function daffMultiTokenProviderFactory<T>(tokenName: string): DaffMultiTokenProviderPair<T> {
  const token = new InjectionToken<T[]>(
    tokenName,
    { factory: () => []},
  );
  const provider = (...values: T[]): Provider[] =>
    values.map(value => ({
      provide: token,
      useValue: value,
      multi: true,
    }));

  return {
    token,
    provider,
  };
}
