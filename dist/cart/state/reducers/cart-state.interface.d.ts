import { DaffCart } from '@daffodil/cart';
import { DaffCartResolveState } from './cart-resolve/cart-resolve-state.enum';
import { DaffCartErrors } from './errors/cart-errors.type';
import { DaffCartLoading } from './loading/cart-loading.type';
export interface DaffCartReducerState<T extends DaffCart = DaffCart> {
    cart: T;
    loading: DaffCartLoading;
    errors: DaffCartErrors;
    resolved: DaffCartResolveState;
}
