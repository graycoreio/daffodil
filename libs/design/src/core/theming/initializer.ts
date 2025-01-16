import {
  inject,
  makeEnvironmentProviders,
  provideAppInitializer,
} from '@angular/core';

import { DaffThemeClassSetterService } from './services/class-setter/theme-class-setter.service';

export const DAFF_THEME_INIT = (classSetter: DaffThemeClassSetterService) => () => classSetter.beginThemeSync();

/**
 * The theme provider for the app.
 * This configures updating the body with the theme class.
 */
export const DAFF_THEME_INITIALIZER = makeEnvironmentProviders([
  DaffThemeClassSetterService,
  provideAppInitializer(() => {
    const initializerFn = (DAFF_THEME_INIT)(inject(DaffThemeClassSetterService));
    return initializerFn();
  }),
]);
