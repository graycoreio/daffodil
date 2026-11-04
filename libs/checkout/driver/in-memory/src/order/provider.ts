import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffCheckoutOrderDriver } from '@daffodil/checkout/driver';

import { DaffInMemoryCheckoutOrderService } from './driver.service';

export const provideDaffCheckoutInMemoryOrderDriver = () => makeEnvironmentProviders([
  provideDaffCheckoutOrderDriver(DaffInMemoryCheckoutOrderService),
]);
