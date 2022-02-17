import {
  Thing,
  WithContext,
} from 'schema-dts';

import {
  DaffIdentifiable,
  DaffLocatable,
  DaffKindable,
} from '@daffodil/core';

/**
 * An extension of the schema.org `Thing` that includes a result `kind`.
 * This represents the result for a searchable entity.
 */
export type DaffSearchResult = Exclude<WithContext<Thing>, string> & DaffIdentifiable & DaffKindable & DaffLocatable;
