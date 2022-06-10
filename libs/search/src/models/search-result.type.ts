import {
  DaffIdentifiable,
  DaffLocatable,
  DaffKindable,
} from '@daffodil/core';

/**
 * This represents the result for a searchable entity.
 */
export type DaffSearchResult = DaffIdentifiable & DaffKindable & DaffLocatable;
