import { importProvidersFrom } from '@angular/core';

import { DaffCartStateModule } from '@daffodil/cart/state';

import { provideAddToCartNotificationState } from './components/add-to-cart-notification/add-to-cart-notification-state.provider';

export function provideCartRoot() {
  return [
    importProvidersFrom(DaffCartStateModule),
    provideAddToCartNotificationState(),
  ];
}
