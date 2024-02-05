import { InjectionToken } from '@angular/core';

/**
 * The default analytics configuration. We intentionally do not track
 * everything by default, as the action stream can be fairly cluttered,
 * depending upon implementation details.
 */
export const defaultConfig: DaffAnalyticsConfigInterface = {
  analyzableActions: [],
};

/**
 * Allows you to provide configuration to the `@daffodil/analytics` package.
 */
export interface DaffAnalyticsConfigInterface {

  /**
   * A set of actions that will be available for analysis by trackers.
   */
  analyzableActions: string[];
}

/**
 * Allows you to provide configuration to the `@daffodil/analytics` package.
 */
export const DaffAnalyticsConfig = new InjectionToken<DaffAnalyticsConfigInterface>('DaffAnalyticsConfig', {
  providedIn: 'root',
  factory: () => defaultConfig,
});
