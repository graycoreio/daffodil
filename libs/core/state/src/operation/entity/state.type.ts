import { EntityState } from '@ngrx/entity';

import { DaffIdentifiable } from '@daffodil/core';

import { DaffOperationEntity } from './type';

/**
 * An operation entity state.
 * Stores the current state of an operation and any associated errors directly on the entity for context.
 */
export type DaffOperationEntityState<T extends DaffIdentifiable = DaffIdentifiable> = EntityState<DaffOperationEntity<T>>;
