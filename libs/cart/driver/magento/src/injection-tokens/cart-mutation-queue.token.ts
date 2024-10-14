import { inject } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { createSingleInjectionToken } from '@daffodil/core';
import { DaffQueuedApollo } from '@daffodil/core/graphql';

export const {
  token: DAFF_MAGENTO_CART_MUTATION_QUEUE,
  provider: daffProvideCartMagentoMutationQueue,
} = createSingleInjectionToken<DaffQueuedApollo>(
  'DAFF_MAGENTO_CART_MUTATION_QUEUE', {
    providedIn: 'root',
    factory: () => new DaffQueuedApollo(inject(Apollo)),
  },
);
