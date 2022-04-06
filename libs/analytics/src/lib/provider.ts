import {
  Provider,
  Type,
} from '@angular/core';

import { DaffAnalyticsServices } from './analytics-tracker';

export function daffAnalyticsServiceProvider(services: Provider[]): Provider[] {
  return services.map<Provider>(service => (service instanceof Type ? {
    provide: DaffAnalyticsServices,
    useExisting: service,
    multi: true,
  } : service));
}
