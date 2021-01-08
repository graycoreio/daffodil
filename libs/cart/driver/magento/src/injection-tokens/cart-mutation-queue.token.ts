import { inject, InjectionToken } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { DaffQueuedApollo } from '@daffodil/core/graphql'

export const DAFF_MAGENTO_CART_MUTATION_QUEUE = new InjectionToken<DaffQueuedApollo>('DAFF_MAGENTO_CART_MUTATION_QUEUE', {
  providedIn: 'root',
  factory: () => new DaffQueuedApollo(inject(Apollo))
})
