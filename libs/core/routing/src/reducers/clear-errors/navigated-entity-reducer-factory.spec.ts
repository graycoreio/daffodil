import {
  createEntityAdapter,
  EntityState,
} from '@ngrx/entity';
import {
  RouterAction,
  routerNavigatedAction,
} from '@ngrx/router-store';
import { ActionReducer } from '@ngrx/store';

import { DaffIdentifiable } from '@daffodil/core';
import { DaffErrorable } from '@daffodil/core/state';

import { daffRouterStateNavigatedClearEntityErrorsReducerFactory } from './navigated-entity-reducer-factory';

interface Entity extends DaffIdentifiable, DaffErrorable {}

const adapter = createEntityAdapter<Entity>();
const initialState: EntityState<Entity> = adapter.getInitialState();

describe('@daffodil/core/state | daffRouterStateNavigatedClearEntityErrorsReducerFactory', () => {
  let reducer: ActionReducer<EntityState<Entity>, RouterAction<unknown>>;

  beforeEach(() => {
    reducer = daffRouterStateNavigatedClearEntityErrorsReducerFactory<Entity>(adapter);
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when ROUTER_NAVIGATED is triggered', () => {
    let result: EntityState<Entity>;

    beforeEach(() => {
      const navigatedAction = routerNavigatedAction({ payload: null });

      result = reducer(adapter.addOne({
        id: 'id',
        errors: [{
          code: 'code',
          message: 'message',
        }],
      }, initialState), navigatedAction);
    });

    it('sets clears errors', () => {
      expect(result.entities.id.errors).toEqual([]);
    });
  });
});
