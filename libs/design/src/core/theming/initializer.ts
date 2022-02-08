import {
  Provider,
  APP_INITIALIZER,
} from '@angular/core';

import { DaffodilThemeClassSetterService } from './services/class-setter/theme-class-setter.service';

/**
 * The theme provider for the app.
 * This configures updating the body with the theme class.
 */
export const DAFF_THEME_INITIALIZER: Provider[] = [
  DaffodilThemeClassSetterService,
  {
    provide: APP_INITIALIZER,
    multi: true,
    deps: [DaffodilThemeClassSetterService],
    useFactory: (classSetter: DaffodilThemeClassSetterService) => () => classSetter.beginThemeSync(),
  },
];
