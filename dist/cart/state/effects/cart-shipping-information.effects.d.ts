import { Actions } from '@ngrx/effects';
import { DaffCartShippingInformation, DaffCart, DaffCartStorageService } from '@daffodil/cart';
import { DaffCartShippingInformationServiceInterface } from '@daffodil/cart/driver';
import { DaffCartShippingInformationLoadSuccess, DaffCartShippingInformationLoadFailure, DaffCartShippingInformationDeleteSuccess, DaffCartShippingInformationDeleteFailure, DaffCartShippingInformationUpdateSuccess, DaffCartShippingInformationUpdateFailure } from '../actions/public_api';
export declare class DaffCartShippingInformationEffects<T extends DaffCartShippingInformation, V extends DaffCart> {
    private actions$;
    private errorMatcher;
    private driver;
    private storage;
    constructor(actions$: Actions, errorMatcher: Function, driver: DaffCartShippingInformationServiceInterface<T, V>, storage: DaffCartStorageService);
    get$: import("rxjs").Observable<DaffCartShippingInformationLoadFailure | DaffCartShippingInformationLoadSuccess<T>>;
    update$: import("rxjs").Observable<DaffCartShippingInformationUpdateFailure | DaffCartShippingInformationUpdateSuccess<{
        id: string | number;
        subtotal: number;
        grand_total: number;
        coupons: import("../../../../../dist/cart/daffodil-cart").DaffCartCoupon[];
        items: import("../../../../../dist/cart/daffodil-cart").DaffCartItem[];
        billing_address: import("../../../../../dist/cart/daffodil-cart").DaffCartAddress;
        shipping_address: import("../../../../../dist/cart/daffodil-cart").DaffCartAddress;
        payment: import("../../../../../dist/cart/daffodil-cart").DaffCartPaymentMethod;
        totals: import("../../../../../dist/cart/daffodil-cart").DaffCartTotal[];
        shipping_information: DaffCartShippingInformation;
        available_shipping_methods: import("../../../../../dist/cart/daffodil-cart").DaffCartShippingRate[];
        available_payment_methods: import("../../../../../dist/cart/daffodil-cart").DaffCartPaymentMethod[];
        extra_attributes: any;
    }>>;
    delete$: import("rxjs").Observable<DaffCartShippingInformationDeleteFailure | DaffCartShippingInformationDeleteSuccess<{
        id: string | number;
        subtotal: number;
        grand_total: number;
        coupons: import("../../../../../dist/cart/daffodil-cart").DaffCartCoupon[];
        items: import("../../../../../dist/cart/daffodil-cart").DaffCartItem[];
        billing_address: import("../../../../../dist/cart/daffodil-cart").DaffCartAddress;
        shipping_address: import("../../../../../dist/cart/daffodil-cart").DaffCartAddress;
        payment: import("../../../../../dist/cart/daffodil-cart").DaffCartPaymentMethod;
        totals: import("../../../../../dist/cart/daffodil-cart").DaffCartTotal[];
        shipping_information: DaffCartShippingInformation;
        available_shipping_methods: import("../../../../../dist/cart/daffodil-cart").DaffCartShippingRate[];
        available_payment_methods: import("../../../../../dist/cart/daffodil-cart").DaffCartPaymentMethod[];
        extra_attributes: any;
    }>>;
}
