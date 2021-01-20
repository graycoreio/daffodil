import { EntityAdapter } from '@ngrx/entity';
import { DaffStatefulCartItem } from '../../models/stateful-cart-item';
/**
 * Cart Item Entities Adapter for changing/overwriting entity state.
 */
export declare const daffCartItemEntitiesAdapter: <T extends DaffStatefulCartItem>() => EntityAdapter<T>;
