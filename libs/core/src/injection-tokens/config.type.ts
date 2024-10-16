import {
  InjectionToken,
  FactoryProvider,
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
   * An injection token containing a config may also be passed.
   */
  provider: <R extends T = T>(config: Partial<R> | InjectionToken<Partial<R>>) => FactoryProvider;
}
