import {
  inject,
  makeEnvironmentProviders,
  provideAppInitializer,
} from '@angular/core';

import { initializeRouterService } from './initializer';
import { DaffSeoNativeCanonicalUrlEffects } from '../effects/canonical.effects';

/**
 * Configures an Angular application to track routing configuration
 * and subsequently set canonical url information in the document.
 *
 * This provider is intended to only be imported exactly once in the root of the application.
 *
 * @example
 * ```ts
 * @NgModule({
 *   providers: [
 *    daffSeoRouterCanonicalProvider()
 *   ],
 * })
 * export class AppModule { }
 * ```
 */
export const daffSeoRouterCanonicalProvider = () => makeEnvironmentProviders([
  DaffSeoNativeCanonicalUrlEffects,
  provideAppInitializer(() => {
    const initializerFn = (initializeRouterService)(inject(DaffSeoNativeCanonicalUrlEffects));
    return initializerFn();
  }),
]);
