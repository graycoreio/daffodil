import {
  InjectionToken,
  ValueProvider,
} from '@angular/core';

/**
 * A injection token to hold and provide a config value.
 */
export interface DaffConfigInjectionToken<T = unknown> {
  /**
   * The injection token.
   * Its default value is the default config passed during token creation.
   */
  token: InjectionToken<T>;

  /**
   * A helper function to provide a value to the token.
   * It will shallow merge the passed config with the default config
   * with the passed config keys taking precedence.
   */
  provider: <R extends T = T>(config: Partial<R>) => ValueProvider;
}
