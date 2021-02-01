import { EntityState } from '@ngrx/entity';

import { DaffOrder } from '@daffodil/order';

/**
 * Interface for order entity state.
 */
export type DaffOrderEntityState<T extends DaffOrder = DaffOrder> = EntityState<T>;
