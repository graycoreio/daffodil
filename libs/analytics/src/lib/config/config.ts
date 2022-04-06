import { InjectionToken } from '@angular/core';

/**
 * The default analytics configuration. We intentionally do not track
 * everything by default, as the action stream can be fairly cluttered,
 * depending upon implementation details.
 */
export const defaultConfig: DaffAnalyticsConfigInterface = {
  analyzableActions: [],
};

export interface DaffAnalyticsConfigInterface {
  analyzableActions: string[];
}

export const DaffAnalyticsConfig = new InjectionToken<DaffAnalyticsConfigInterface>('DaffAnalyticsConfig', {
  providedIn: 'root',
  factory: () => defaultConfig,
});
