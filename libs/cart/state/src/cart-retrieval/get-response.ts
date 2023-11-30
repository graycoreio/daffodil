import { Action } from '@ngrx/store';

import { DaffCart } from '@daffodil/cart';

import {
  DaffCartRetrievalAction,
  DaffCartRetrievalActionInjection,
  DaffCartRetrievalActionTransformedInjection,
} from './type';

/**
 * Gets the cart from the passed action if it is a recognized retrieval action and applying the transformation if needed.
 */
export function daffCartRetrievalGetResponse<T extends DaffCart = DaffCart>(action: Action, retrievalActions: DaffCartRetrievalActionInjection[]): Partial<T> | null {
  const actionInjection = retrievalActions.find(({ type }) => type === action.type);

  if (actionInjection) {
    return (<DaffCartRetrievalActionTransformedInjection>actionInjection).transform?.<T>(action) || (<DaffCartRetrievalAction<T>>action).payload;
  }

  return null;
}
