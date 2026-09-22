import {
  EnvironmentProviders,
  makeEnvironmentProviders,
  Provider,
} from '@angular/core';
import { provideEffects } from '@ngrx/effects';

import {
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
export const provideDaffAnalytics = (
  services: Provider[] = [],
  config: DaffAnalyticsConfigInterface = defaultConfig,
): EnvironmentProviders => makeEnvironmentProviders([
  provideEffects(DaffAnalyticsEffects),
  provideDaffAnalyticsConfig(config),
  ...daffAnalyticsServiceProvider(services),
]);
