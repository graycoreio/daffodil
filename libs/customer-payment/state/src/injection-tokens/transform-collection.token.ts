import {
  inject,
  InjectionToken,
} from '@angular/core';

import { daffArrayToDict } from '@daffodil/core';

import { DaffCustomerPaymentRequestTransform } from '../models/public_api';
import { DAFF_CUSTOMER_PAYMENT_REQUEST_TRANSFORMS } from './available-transforms.token';

/**
 * An internal token to combine the available payment transforms into a single collection.
 */
export const DAFF_CUSTOMER_PAYMENT_REQUEST_TRANSFORM_COLLECTION = new InjectionToken<Record<DaffCustomerPaymentRequestTransform['kind'], DaffCustomerPaymentRequestTransform>>(
  'DAFF_CUSTOMER_PAYMENT_REQUEST_TRANSFORM_COLLECTION',
  {
    factory: () => {
      const transforms = inject(DAFF_CUSTOMER_PAYMENT_REQUEST_TRANSFORMS);
      return daffArrayToDict(transforms, ({ kind }) => kind);
    },
  },
);
