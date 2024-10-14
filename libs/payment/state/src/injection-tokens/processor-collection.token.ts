import { inject } from '@angular/core';

import {
  createSingleInjectionToken,
  daffArrayToDict,
} from '@daffodil/core';

import { DAFF_PAYMENT_AVAILABLE_PROCESSORS } from './available-processors.token';
import { DaffPaymentProcessorCollection } from '../models/public_api';

export const {
  /**
   * An internal token to combine the available payment processors into a single collection.
   */
  token: DAFF_PAYMENT_PROCESSOR_COLLECTION,
  provider: daffProvidePaymentProcessorCollection,
} = createSingleInjectionToken<DaffPaymentProcessorCollection>(
  'DAFF_PAYMENT_PROCESSOR_COLLECTION',
  {
    factory: () => {
      const processors = inject(DAFF_PAYMENT_AVAILABLE_PROCESSORS);
      return daffArrayToDict(processors, ({ kind }) => kind);
    },
  },
);
