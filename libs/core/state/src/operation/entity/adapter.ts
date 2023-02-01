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

/**
 * An entity state adapter that takes care of managing contextual operation and error state for entities.
 */
export interface DaffOperationEntityStateAdapter<T extends DaffIdentifiable = DaffIdentifiable> {
  /**
   * Stores a list of entities in state and resets them all to stable.
   */
  list<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(entities: T[], state: S): S;
  /**
   * Optimistically adds a placeholder entity into state if necessary and sets the entity to resolving.
   */
  preload<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(id: string, state: S): S;
  /**
   * Upserts the entity into state and resets operation state and errors.
   */
  load<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(entity: T, state: S): S;
  /**
   * Adds a placeholder entity into state if `placeholderId` is specified and sets state to adding.
   */
  preadd<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(entity: T, state: S, placeholderId?: string): S;
  /**
   * Adds the entity into state, sets operation state to added, and resets errors.
   */
  add<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(entity: T, state: S, placeholderId?: string): S;
  /**
   * Sets the entity's operation state to mutating.
   */
  preupdate<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(entity: Partial<T> & DaffIdentifiable, state: S): S;
  /**
   * Upserts the entity into state, sets operation state to mutated, and resets errors.
   */
  update<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(entity: Partial<T> & DaffIdentifiable, state: S): S;
  /**
   * Sets the entity's operation state to deleting.
   */
  preremove<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(key: string, state: S): S;
  /**
   * Removes the entity from state.
   */
  remove<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(key: string, state: S): S;
  /**
   * Resets the entity's operation state and stores errors on the entity.
   */
  operationFailed<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(key: string, errors: DaffStateError[], state: S): S;
  /**
   * Resets the entity's operation state to stable.
   */
  resetState<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(key: string, state: S): S;
  /**
   * Gets an empty entity state.
   */
  getInitialState<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(state?: S): S;
  /**
   * Gets entity selectors.
   */
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
