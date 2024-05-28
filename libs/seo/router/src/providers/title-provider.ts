import {
  APP_INITIALIZER,
  Provider,
} from '@angular/core';

import { initializeRouterService } from './initializer';
import { DaffSeoNativeTitleEffects } from '../effects/title.effects';

/**
 * Configures an Angular application to track routing configuration and subsequently set title information in the document.
 *
 * This provider is intended to only be imported exactly once in the root of the application.
 *
 * @deprecated since Angular 14. See https://angular.io/api/router/TitleStrategy
 *
 * ## Usage
 *
 * ```ts
 * @NgModule({
 *   providers: [
 *    daffSeoRouterTitleProvider()
 *   ],
 * })
 * export class AppModule { }
 * ```
 */
export const daffSeoRouterTitleProvider = (): Provider[] => [
  DaffSeoNativeTitleEffects,
  {
    provide: APP_INITIALIZER,
    useFactory: initializeRouterService,
    deps: [DaffSeoNativeTitleEffects],
    multi: true,
  },
];
