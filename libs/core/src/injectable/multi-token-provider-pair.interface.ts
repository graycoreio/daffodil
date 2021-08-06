import {
  InjectionToken,
  Provider,
} from '@angular/core';

/**
 * A multi token and provider pair.
 */
export interface DaffMultiTokenProviderPair<T> {
  token: InjectionToken<T[]>;
  provider: (...values: T[]) => Provider[];
}
