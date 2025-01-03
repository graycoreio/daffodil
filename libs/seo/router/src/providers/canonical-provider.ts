import {
  APP_INITIALIZER,
  Provider,
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
// TODO: change return type to EnvironmentProvider
export const daffSeoRouterCanonicalProvider = (): Provider[] => [
  DaffSeoNativeCanonicalUrlEffects,
  {
    provide: APP_INITIALIZER,
    useFactory: initializeRouterService,
    deps: [DaffSeoNativeCanonicalUrlEffects],
    multi: true,
  },
];
