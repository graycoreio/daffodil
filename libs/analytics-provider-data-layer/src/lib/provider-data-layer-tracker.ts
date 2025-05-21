import {
  FactoryProvider,
  inject,
} from '@angular/core';
import { map } from 'rxjs';

import {
  DaffAnalyticsEvent,
  DaffAnalyticsServices,
} from '@daffodil/analytics';
import {
  MaybeAsync,
  observe,
} from '@daffodil/core';

import { DaffDataLayerItem } from './data-layer';
import { DaffAnalyticsDataLayer } from './data-layer.service';

export type DaffDataLayerTracker<T extends DaffAnalyticsEvent> = (
  action: T
) => MaybeAsync<DaffDataLayerItem>;

export function provideDaffDataLayerTracker<T extends DaffAnalyticsEvent>(
  tracker: DaffDataLayerTracker<T>,
): FactoryProvider {
  return {
    provide: DaffAnalyticsServices,
    useFactory: () => {
      const dataLayer = inject(DaffAnalyticsDataLayer);
      return (action: T) => observe(tracker(action)).pipe(
        map((data) => dataLayer.push(data)),
      );
    },
    multi: true,
  };
}
