import { inject } from '@angular/core';

import {
  createSingleInjectionToken,
  daffArrayToDict,
} from '@daffodil/core';

import { DAFF_CUSTOMER_PAYMENT_REQUEST_TRANSFORMS } from './available-transforms.token';
import { DaffCustomerPaymentRequestTransform } from '../models/public_api';

export const {
  /**
   * An internal token to combine the available payment transforms into a single collection.
   */
  token: DAFF_CUSTOMER_PAYMENT_REQUEST_TRANSFORM_COLLECTION,
  /**
   * Provider function for {@link DAFF_CUSTOMER_PAYMENT_REQUEST_TRANSFORM_COLLECTION}.
   */
  provider: provideDaffCustomerPaymentRequestTransformCollection,
} = createSingleInjectionToken<Record<DaffCustomerPaymentRequestTransform['kind'], DaffCustomerPaymentRequestTransform>>(
  'DAFF_CUSTOMER_PAYMENT_REQUEST_TRANSFORM_COLLECTION',
  {
    factory: () => {
      const transforms = inject(DAFF_CUSTOMER_PAYMENT_REQUEST_TRANSFORMS);
      return daffArrayToDict(transforms, ({ kind }) => kind);
    },
  },
);
