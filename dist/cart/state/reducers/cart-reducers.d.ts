import { daffCartReducer } from './cart.reducer';
import { daffCartItemEntitiesReducer } from './cart-item-entities/cart-item-entities.reducer';
import { daffCartOrderReducer } from './cart-order/cart-order.reducer';
export declare const daffCartReducers: {
    cart: typeof daffCartReducer;
    cartItems: typeof daffCartItemEntitiesReducer;
    order: typeof daffCartOrderReducer;
};
