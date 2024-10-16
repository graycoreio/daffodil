import { createConfigInjectionToken } from '@daffodil/core';

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

export const {
  /**
   * Allows you to provide configuration to the `@daffodil/analytics` package.
   */
  token: DaffAnalyticsConfig,
  /**
   * Provider function for {@link DaffAnalyticsConfig}.
   */
  provider: provideDaffAnalyticsConfig,
} = createConfigInjectionToken(
  defaultConfig,
  'DaffAnalyticsConfig',
  { providedIn: 'root' },
);
