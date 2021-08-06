import {
  InjectionToken,
  Provider,
} from '@angular/core';

import { DaffTokenProviderPair } from './token-provider-pair.interface';

export function daffMultiTokenProviderFactory<T>(tokenName: string): DaffTokenProviderPair<T> {
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
