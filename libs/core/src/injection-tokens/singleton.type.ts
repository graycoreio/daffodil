import {
  ExistingProvider,
  InjectionToken,
  Type,
} from '@angular/core';

/**
 * A injection token to hold and provide a singleton service.
 */
export interface DaffSingletonInjectionToken<T = unknown> {
  /**
   * The injection token.
   * Its default value is an empty array.
   */
  token: InjectionToken<T>;

  /**
   * A helper function to provide the service class to the token.
   */
  provider: <R extends T = T>(klass: Type<R>) => ExistingProvider;
}
