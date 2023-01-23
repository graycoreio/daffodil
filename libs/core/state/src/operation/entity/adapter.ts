import {
  createEntityAdapter,
  EntityAdapter,
} from '@ngrx/entity';

import { DaffIdentifiable } from '@daffodil/core';

import { DaffStateError } from '../../errors/public_api';
import { DaffState } from '../../states/public_api';
import {
  daffOperationEntityStateSelectorFactory,
  DaffOperationEntityStateSelectors,
} from './selectors';
import { DaffOperationEntityState } from './state.type';
import { DaffOperationEntity } from './type';

export interface DaffOperationEntityStateAdapter<T extends DaffIdentifiable = DaffIdentifiable> {
  list<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(entities: T[], state: S): S;
  preload<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(id: string, state: S): S;
  load<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(entity: T, state: S, placeholderId?: string): S;
  preadd<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(entity: T, state: S, placeholderId?: string): S;
  add<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(entity: T, state: S, placeholderId?: string): S;
  preupdate<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(entity: Partial<T> & DaffIdentifiable, state: S): S;
  update<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(entity: Partial<T> & DaffIdentifiable, state: S): S;
  preremove<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(key: string, state: S): S;
  remove<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(key: string, state: S): S;
  operationFailed<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(key: string, errors: DaffStateError[], state: S): S;
  resetState<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(key: string, state: S): S;
  getInitialState<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(state?: S): S;
  getSelectors<TRootState>(selectState: (state: TRootState) => DaffOperationEntityState<T>): DaffOperationEntityStateSelectors<TRootState, T>;
}

export function daffCreateOperationEntityStateAdapter<T extends DaffIdentifiable = DaffIdentifiable>(adapter: EntityAdapter<DaffOperationEntity<T>> = createEntityAdapter<DaffOperationEntity<T>>()): DaffOperationEntityStateAdapter<T> {
  return {
    list: (entities, state) => adapter.setAll(
      entities.map<DaffOperationEntity<T>>(entity => ({
        ...entity,
        daffState: DaffState.Stable,
        daffErrors: [],
        daffTemp: false,
      })),
      state,
    ),
    preload: (key, state) =>
      adapter.upsertOne(<DaffOperationEntity<T>>{
      // TODO: allow for non identifiable entities?
        id: key,
        daffState: DaffState.Resolving,
        daffErrors: [],
        daffTemp: !state.entities[key],
      }, state),
    load: (entity, state) =>
      adapter.upsertOne({
        ...entity,
        daffState: DaffState.Stable,
        daffErrors: [],
        daffTemp: false,
      }, state),
    preadd: (entity, state, placeholderId) =>
      placeholderId
        ? adapter.addOne({
          ...entity,
          // TODO: allow for non identifiable entities?
          id: placeholderId,
          daffState: DaffState.Adding,
          daffErrors: [],
          daffTemp: true,
        }, state)
        : state,
    add: (entity, state, placeholderId) =>
      adapter.upsertOne({
        ...entity,
        daffState: DaffState.Added,
        daffErrors: [],
        daffTemp: false,
      }, placeholderId ? adapter.removeOne(placeholderId, state) : state),
    preupdate: (entity, state) =>
      adapter.upsertOne({
        ...state.entities[entity.id],
        daffState: DaffState.Mutating,
        daffErrors: [],
      }, state),
    update: (entity, state) =>
      adapter.updateOne({
        id: entity.id,
        changes: <Partial<DaffOperationEntity<T>>>{
          ...entity,
          daffState: DaffState.Mutated,
          daffErrors: [],
          daffTemp: false,
        },
      }, state),
    preremove: (key, state) =>
      adapter.upsertOne({
        ...state.entities[key],
        daffErrors: [],
        daffState: DaffState.Deleting,
      }, state),
    remove: adapter.removeOne,
    operationFailed: (key, errors, state) =>
      adapter.upsertOne({
        ...state.entities[key],
        daffState: DaffState.Stable,
        daffErrors: errors,
      }, state),
    resetState: (key, state) =>
      adapter.upsertOne({
        ...state.entities[key],
        daffState: DaffState.Stable,
      }, state),
    getInitialState: adapter.getInitialState,
    getSelectors: <TRootState>(selectState) => daffOperationEntityStateSelectorFactory<TRootState, T>(adapter.getSelectors(selectState)),
  };
}
