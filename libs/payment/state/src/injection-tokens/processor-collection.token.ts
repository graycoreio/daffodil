import {
  inject,
  InjectionToken,
} from '@angular/core';

import { daffArrayToDict } from '@daffodil/core';

import { DaffPaymentProcessorCollection } from '../models/public_api';
import { DAFF_PAYMENT_AVAILABLE_PROCESSORS } from './available-processors.token';

/**
 * An internal token to combine the available payment processors into a single collection.
 */
export const DAFF_PAYMENT_PROCESSOR_COLLECTION = new InjectionToken<DaffPaymentProcessorCollection>(
  'DAFF_PAYMENT_PROCESSOR_COLLECTION',
  {
    factory: () => {
      const processors = inject(DAFF_PAYMENT_AVAILABLE_PROCESSORS);
      return daffArrayToDict(processors, ({ kind }) => kind);
    },
  },
);
