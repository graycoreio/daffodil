import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { DaffProductUnion } from '../../models/product-union';

/**
 * Product Adapter for changing/overwriting entity state.
 */
export const daffProductEntitiesAdapter : EntityAdapter<DaffProductUnion> = createEntityAdapter<DaffProductUnion>();
