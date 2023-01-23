import { DaffIdentifiable } from '@daffodil/core';

import { DaffStateError } from '../../errors/public_api';
import { DaffStateable } from '../../states/public_api';

/**
 * An entity that is responsible for storing its own errors and loading state.
 */
export type DaffOperationEntity<T extends DaffIdentifiable = DaffIdentifiable> = DaffStateable & T & {
  /**
   * A list of errors applicable only to this entity.
   */
  daffErrors: DaffStateError[];

  /**
   * Whether this entity is temporary.
   * A temporary entity is a placeholder for the optimistic success of an entity operation
   * and will appear in entity state during `get` and `add` operations, if necessary.
   */
  daffTemp: boolean;
};
