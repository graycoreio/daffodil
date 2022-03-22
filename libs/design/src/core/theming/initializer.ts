import {
  Provider,
  APP_INITIALIZER,
} from '@angular/core';

import { DaffThemeClassSetterService } from './services/class-setter/theme-class-setter.service';

export const DAFF_THEME_INIT = (classSetter: DaffThemeClassSetterService) => () => classSetter.beginThemeSync();

/**
 * The theme provider for the app.
 * This configures updating the body with the theme class.
 */
export const DAFF_THEME_INITIALIZER: Provider[] = [
  DaffThemeClassSetterService,
  {
    provide: APP_INITIALIZER,
    multi: true,
    deps: [DaffThemeClassSetterService],
    useFactory: DAFF_THEME_INIT,
  },
];
