import {
  createEntityAdapter,
  EntityAdapter,
} from '@ngrx/entity';

import { DaffIdentifiable } from '@daffodil/core';

import {
  daffOperationEntityStateSelectorFactory,
  DaffOperationEntityStateSelectors,
} from './selectors';
import { DaffOperationEntityState } from './state.type';
import { DaffOperationEntity } from './type';
import { DaffStateError } from '../../errors/public_api';
import { DaffState } from '../../states/public_api';

/**
 * An entity state adapter that takes care of managing contextual operation and error state for entities.
 */
export interface DaffOperationEntityStateAdapterInterface<T extends DaffIdentifiable = DaffIdentifiable> {
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

/**
 * @inheritdoc
 */
export class DaffOperationEntityStateAdapter<T extends DaffIdentifiable = DaffIdentifiable> implements DaffOperationEntityStateAdapterInterface<T> {
  constructor(
    protected adapter: EntityAdapter<DaffOperationEntity<T>> = createEntityAdapter<DaffOperationEntity<T>>(),
  ) {}

  list<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(entities: T[], state: S): S {
    return this.adapter.setAll(
      entities.map<DaffOperationEntity<T>>(entity => ({
        daffState: DaffState.Stable,
        ...entity,
        daffErrors: [],
        daffTemp: false,
      })),
      state,
    );
  }

  preload<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(id: string, state: S): S {
    return this.adapter.upsertOne(<DaffOperationEntity<T>>{
      // TODO: allow for non identifiable entities?
      id,
      daffState: DaffState.Resolving,
      daffErrors: [],
      daffTemp: !state.entities[id],
    }, state);
  }

  load<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(entity: T, state: S): S {
    return this.adapter.upsertOne({
      daffState: DaffState.Stable,
      ...entity,
      daffErrors: [],
      daffTemp: false,
    }, state);
  }

  preadd<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(entity: T, state: S, placeholderId?: string): S {
    return placeholderId
      ? this.adapter.upsertOne({
        ...entity,
        // TODO: allow for non identifiable entities?
        id: placeholderId,
        daffState: DaffState.Adding,
        daffErrors: [],
        daffTemp: true,
      }, state)
      : state;
  }

  add<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(entity: T, state: S, placeholderId?: string): S {
    return this.adapter.upsertOne(
      {
        daffState: DaffState.Added,
        ...entity,
        daffErrors: [],
        daffTemp: false,
      },
      placeholderId ? this.adapter.removeOne(placeholderId, state) : state,
    );
  }

  preupdate<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(entity: Partial<T> & DaffIdentifiable, state: S): S {
    return this.adapter.upsertOne({
      ...state.entities[entity.id],
      daffState: DaffState.Updating,
      daffErrors: [],
    }, state);
  }

  update<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(entity: Partial<T> & DaffIdentifiable, state: S): S {
    return this.adapter.updateOne({
      id: entity.id,
      changes: <Partial<DaffOperationEntity<T>>>{
        daffState: DaffState.Updated,
        ...entity,
        daffErrors: [],
        daffTemp: false,
      },
    }, state);
  }

  preremove<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(key: string, state: S): S {
    return this.adapter.upsertOne({
      ...state.entities[key],
      daffErrors: [],
      daffState: DaffState.Deleting,
    }, state);
  }

  remove<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(key: string, state: S): S {
    return this.adapter.removeOne(key, state);
  }

  operationFailed<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(key: string, errors: DaffStateError[], state: S): S {
    return state.entities[key] ? this.adapter.upsertOne({
      ...state.entities[key],
      daffState: DaffState.Error,
      daffErrors: errors,
    }, state) : state;
  }

  resetState<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(key: string, state: S): S {
    return state.entities[key] ? this.adapter.upsertOne({
      ...state.entities[key],
      daffState: DaffState.Stable,
    }, state) : state;
  }

  getInitialState<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(state?: S): S {
    return this.adapter.getInitialState(state);
  }

  getSelectors<TRootState>(selectState: (state: TRootState) => DaffOperationEntityState<T>): DaffOperationEntityStateSelectors<TRootState, T> {
    return daffOperationEntityStateSelectorFactory<TRootState, T>(this.adapter.getSelectors(selectState));
  }
}

export function daffCreateOperationEntityStateAdapter<T extends DaffIdentifiable = DaffIdentifiable>(adapter: EntityAdapter<DaffOperationEntity<T>> = createEntityAdapter<DaffOperationEntity<T>>()): DaffOperationEntityStateAdapter<T> {
  return new DaffOperationEntityStateAdapter(adapter);
}
