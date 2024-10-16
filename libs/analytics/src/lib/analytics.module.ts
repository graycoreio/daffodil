import {
  ModuleWithProviders,
  NgModule,
  Provider,
} from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import {
  DaffAnalyticsConfig,
  DaffAnalyticsConfigInterface,
  defaultConfig,
  provideDaffAnalyticsConfig,
} from './config/config';
import { DaffAnalyticsEffects } from './effects/analytics-effects';
import { daffAnalyticsServiceProvider } from './provider';

/**
 * Sets up providers necessary to enable analytics tracking functionality for the application.
 * Allows to configure a set of trackers as well as additional configuration details like "analyzeableActions".
 *
 * See {@link DaffAnalyticsConfigInterface} for further configuration options.
 * See {@link DaffAnalyticsTracker} for tracker documentation.
 */
@NgModule({
  imports: [EffectsModule.forFeature([DaffAnalyticsEffects])],
})
export class DaffAnalyticsModule {
  static forRoot(services: Provider[] = [], config: DaffAnalyticsConfigInterface = defaultConfig): ModuleWithProviders<DaffAnalyticsModule> {
    return {
      ngModule: DaffAnalyticsModule,
      providers: [
        provideDaffAnalyticsConfig(config),
        ...daffAnalyticsServiceProvider(services),
      ],
    };
  }
}
