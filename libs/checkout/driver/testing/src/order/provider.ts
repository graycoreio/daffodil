import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffCheckoutOrderDriver } from '@daffodil/checkout/driver';

import { DaffCheckoutTestingOrderService } from './order.service';

export const provideDaffCheckoutTestingOrderDriver = () => makeEnvironmentProviders([
  provideDaffCheckoutOrderDriver(DaffCheckoutTestingOrderService),
]);
