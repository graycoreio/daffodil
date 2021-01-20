import { EntityAdapter } from '@ngrx/entity';
import { DaffProduct } from '../../models/product';
/**
 * Product Adapter for changing/overwriting entity state.
 */
export declare const daffProductEntitiesAdapter: <T extends DaffProduct>() => EntityAdapter<T>;
