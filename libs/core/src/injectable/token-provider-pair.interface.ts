import {
  InjectionToken,
  Provider,
} from '@angular/core';

export interface DaffTokenProviderPair<T> {
  token: InjectionToken<T[]>;
  provider: (...values: T[]) => Provider[];
}
