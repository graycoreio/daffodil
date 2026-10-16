import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffCheckoutOrderDriver } from '@daffodil/checkout/driver';

import { MagentoCheckoutOrderService } from './driver.service';

export const provideMagentoCheckoutOrderDriver = () => makeEnvironmentProviders([
  provideDaffCheckoutOrderDriver(MagentoCheckoutOrderService),
]);
