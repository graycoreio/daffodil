import {
  inject,
  makeEnvironmentProviders,
  provideAppInitializer,
} from '@angular/core';

import { initializeRouterService } from './initializer';
import { DaffSeoNativeTitleEffects } from '../effects/title.effects';

/**
 * Configures an Angular application to track routing configuration and subsequently set title information in the document.
 *
 * This provider is intended to only be imported exactly once in the root of the application.
 *
 * @deprecated since Angular 14. See https://angular.io/api/router/TitleStrategy Deprecated in version 0.78.0. Will be removed in version 0.81.0.
 *
 * @example
 * ```ts
 * @NgModule({
 *   providers: [
 *    daffSeoRouterTitleProvider()
 *   ],
 * })
 * export class AppModule { }
 * ```
 */
export const daffSeoRouterTitleProvider = () => makeEnvironmentProviders([
  DaffSeoNativeTitleEffects,
  provideAppInitializer(() => {
    const initializerFn = (initializeRouterService)(inject(DaffSeoNativeTitleEffects));
    return initializerFn();
  }),
]);
