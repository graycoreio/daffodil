import {
  InjectionToken,
  ValueProvider,
} from '@angular/core';

/**
 * A injection token to hold and provide a single value.
 */
export interface DaffSingleInjectionToken<T = unknown> {
  /**
   * The injection token.
   */
  token: InjectionToken<T>;

  /**
   * A helper function to provide a value to the token.
   */
  provider: (value: T) => ValueProvider;
}
