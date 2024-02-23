import {
  ExistingProvider,
  InjectionToken,
  Type,
} from '@angular/core';

/**
 * A injection token to hold and provide multiple services.
 */
export interface DaffServicesInjectionToken<T = unknown> {
  /**
   * The injection token.
   * Its default value is an empty array.
   */
  token: InjectionToken<Array<T>>;

  /**
   * A helper function to provide service classes to the token.
   */
  provider: (...classes: Array<Type<T>>) => Array<ExistingProvider>;
}
