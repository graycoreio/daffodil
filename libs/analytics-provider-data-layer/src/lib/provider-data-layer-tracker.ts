import {
  FactoryProvider,
  inject,
} from '@angular/core';
import { of } from 'rxjs';

import {
  DaffAnalyticsEvent,
  DaffAnalyticsServices,
} from '@daffodil/analytics';

import { DataLayerItem } from './data-layer';
import { DaffAnalyticsDataLayer } from './data-layer.service';



export type DataLayerTracker<T extends DaffAnalyticsEvent> = (
  action: T
) => DataLayerItem;

export function provideDataLayerTracker<T extends DaffAnalyticsEvent>(
  tracker: DataLayerTracker<T>,
): FactoryProvider {
  return {
    provide: DaffAnalyticsServices,
    useFactory: () => {
      const dataLayer = inject(DaffAnalyticsDataLayer);
      return (action: T) => of(dataLayer.push(tracker(action)));
    },
    multi: true,
  };
}
