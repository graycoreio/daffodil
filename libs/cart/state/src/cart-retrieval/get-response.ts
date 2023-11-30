import { Action } from '@ngrx/store';

import { DaffCart } from '@daffodil/cart';

import {
  DaffCartRetrievalAction,
  DaffCartRetrievalActionInjection,
  DaffCartRetrievalActionTransformedInjection,
} from './type';

export function daffCartRetrievalGetResponse<T extends DaffCart = DaffCart>(action: Action, retrievalActions: DaffCartRetrievalActionInjection[]): Partial<T> | null {
  const actionInjection = retrievalActions.find(({ type }) => type === action.type);

  if (actionInjection) {
    return (<DaffCartRetrievalActionTransformedInjection>actionInjection).transform?.<T>(action) || (<DaffCartRetrievalAction<T>>action).payload;
  }

  return null;
}
