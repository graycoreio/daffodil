import { DaffIdentifiable } from '@daffodil/core';

import { DaffErrorable } from '../../errors/public_api';
import { DaffStateable } from '../../states/public_api';

/**
 * An entity that is responsible for storing its own errors and loading state.
 * Its possible to be an "optimistic" entity, i.e. only temporary while the real entity is in some loading state.
 */
export type DaffOperationEntity<T extends DaffIdentifiable = DaffIdentifiable> = DaffStateable & DaffErrorable & T & {
  /**
   * Whether this entity is temporary.
   * A temporary entity is a placeholder for the optimistic success of an entity operation
   * and will appear in entity state during `get` and `add` operations, if necessary.
   */
  daffTemp: boolean;
};
