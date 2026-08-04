import { makeEnvironmentProviders } from '@angular/core';

import { provideMagentoCheckoutOrderDriver } from './order/provider';

export const provideMagentoCheckoutDriver = () => makeEnvironmentProviders([
  provideMagentoCheckoutOrderDriver(),
]);
