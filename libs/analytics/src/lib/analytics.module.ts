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
} from './config/config';
import { DaffAnalyticsEffects } from './effects/analytics-effects';
import { daffAnalyticsServiceProvider } from './provider';

@NgModule({
  imports: [EffectsModule.forFeature([DaffAnalyticsEffects])],
})
export class DaffAnalyticsModule {
  static forRoot(services: Provider[] = [], config: DaffAnalyticsConfigInterface = defaultConfig): ModuleWithProviders<DaffAnalyticsModule>  {
    return  {
      ngModule: DaffAnalyticsModule,
      providers: [
        { provide: DaffAnalyticsConfig, useValue: config },
        ...daffAnalyticsServiceProvider(services),
      ],
    };
  }
}
