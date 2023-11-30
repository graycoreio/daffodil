import {
  InjectionToken,
  ValueProvider,
} from '@angular/core';

import { DaffCartRetrievalActionInjection } from './type';

/**
 * A token to hold {@link DaffCartRetrievalActionInjection}s.
 */
export const DAFF_CART_RETRIEVAL_ACTIONS = new InjectionToken<DaffCartRetrievalActionInjection[]>('DAFF_CART_RETRIEVAL_ACTIONS', { factory: () => []});

/**
 * A provider function for {@link DAFF_CART_RETRIEVAL_ACTIONS}.
 */
export const daffCartProvideRetrievalActions = (...actions: DaffCartRetrievalActionInjection[]): ValueProvider[] =>
  actions.map((action) => ({
    provide: DAFF_CART_RETRIEVAL_ACTIONS,
    useValue: action,
    multi: true,
  }));
