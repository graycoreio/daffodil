import {
  InjectionToken,
  ValueProvider,
} from '@angular/core';

/**
 * A injection token to hold and provide multiple values.
 */
export interface DaffMultiInjectionToken<T = unknown> {
  /**
   * The injection token.
   * Its default value is an empty array.
   */
  token: InjectionToken<Array<T>>;

  /**
   * A helper function to provide values to the token.
   */
  provider: <R extends T = T>(...values: Array<R>) => Array<ValueProvider>;
}
