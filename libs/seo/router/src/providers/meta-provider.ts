import {
  APP_INITIALIZER,
  Provider,
} from '@angular/core';

import { initializeRouterService } from './initializer';
import { DaffSeoNativeMetaEffects } from '../effects/meta.effects';

/**
 * Configures an Angular application to track routing configuration and subsequently set meta information in the document.
 *
 * This provider is intended to only be imported exactly once in the root of the application.
 *
 * @example
 * ```ts
 * @NgModule({
 *   providers: [
 *    daffSeoRouterMetaProvider()
 *   ],
 * })
 * export class AppModule { }
 * ```
 */
export const daffSeoRouterMetaProvider = (): Provider[] => [
  DaffSeoNativeMetaEffects,
  {
    provide: APP_INITIALIZER,
    useFactory: initializeRouterService,
    deps: [DaffSeoNativeMetaEffects],
    multi: true,
  },
];
