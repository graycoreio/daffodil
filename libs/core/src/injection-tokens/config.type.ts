import {
  InjectionToken,
  FactoryProvider,
} from '@angular/core';

import { RequiredProperties } from '../public_api';

/**
 * A injection token to hold and provide a config value.
 */
export interface DaffConfigInjectionToken<T = unknown, TDefault extends Partial<T> = Partial<T>> {
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
  provider: <R extends
    Omit<T, RequiredProperties<TDefault>> & Partial<Pick<TDefault, RequiredProperties<TDefault>>>
  = Omit<T, RequiredProperties<TDefault>> & Partial<Pick<TDefault, RequiredProperties<TDefault>>>>(config: R | InjectionToken<R>) => FactoryProvider;
}
