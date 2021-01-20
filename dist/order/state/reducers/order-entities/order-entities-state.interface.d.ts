import { EntityState } from '@ngrx/entity';
import { DaffOrder } from '@daffodil/order';
/**
 * Interface for order entity state.
 */
export interface DaffOrderEntityState<T extends DaffOrder = DaffOrder> extends EntityState<T> {
}
