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

import { DataLayerItem } from './data-layer';
import { DaffAnalyticsDataLayer } from './data-layer.service';

export type DataLayerTracker<T extends DaffAnalyticsEvent> = (
  action: T
) => MaybeAsync<DataLayerItem>;

export function provideDataLayerTracker<T extends DaffAnalyticsEvent>(
  tracker: DataLayerTracker<T>,
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
