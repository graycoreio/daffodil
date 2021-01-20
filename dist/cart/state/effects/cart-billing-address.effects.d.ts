import { Actions } from '@ngrx/effects';
import { DaffCartAddress, DaffCart, DaffCartStorageService } from '@daffodil/cart';
import { DaffCartBillingAddressServiceInterface } from '@daffodil/cart/driver';
import { DaffCartBillingAddressLoadSuccess, DaffCartBillingAddressLoadFailure, DaffCartBillingAddressUpdateSuccess, DaffCartBillingAddressUpdateFailure } from '../actions/public_api';
export declare class DaffCartBillingAddressEffects<T extends DaffCartAddress, V extends DaffCart> {
    private actions$;
    private errorMatcher;
    private driver;
    private storage;
    constructor(actions$: Actions, errorMatcher: Function, driver: DaffCartBillingAddressServiceInterface<T, V>, storage: DaffCartStorageService);
    get$: import("rxjs").Observable<DaffCartBillingAddressLoadFailure | DaffCartBillingAddressLoadSuccess<T>>;
    update$: import("rxjs").Observable<DaffCartBillingAddressUpdateFailure | DaffCartBillingAddressUpdateSuccess<{
        id: string | number;
        subtotal: number;
        grand_total: number;
        coupons: import("../../../../../dist/cart/daffodil-cart").DaffCartCoupon[];
        items: import("../../../../../dist/cart/daffodil-cart").DaffCartItem[];
        billing_address: DaffCartAddress;
        shipping_address: DaffCartAddress;
        payment: import("../../../../../dist/cart/daffodil-cart").DaffCartPaymentMethod;
        totals: import("../../../../../dist/cart/daffodil-cart").DaffCartTotal[];
        shipping_information: import("../../../../../dist/cart/daffodil-cart").DaffCartShippingInformation;
        available_shipping_methods: import("../../../../../dist/cart/daffodil-cart").DaffCartShippingRate[];
        available_payment_methods: import("../../../../../dist/cart/daffodil-cart").DaffCartPaymentMethod[];
        extra_attributes: any;
    }>>;
}
