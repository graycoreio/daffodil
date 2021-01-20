import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { DaffCart } from '@daffodil/cart';
import { DaffInMemoryDataServiceInterface } from '@daffodil/core/testing';
import { DaffInMemoryBackendCartService } from './cart/cart.service';
import { DaffInMemoryBackendCartItemsService } from './cart-items/cart-items.service';
import { DaffInMemoryBackendCartOrderService } from './cart-order/cart-order.service';
import { DaffInMemoryBackendCartCouponService } from './cart-coupon/cart-coupon.service';
import { DaffInMemoryBackendCartAddressService } from './cart-address/cart-address.service';
import { DaffInMemoryBackendCartShippingAddressService } from './cart-shipping-address/cart-shipping-address.service';
import { DaffInMemoryBackendCartBillingAddressService } from './cart-billing-address/cart-billing-address.service';
import { DaffInMemoryBackendCartPaymentMethodsService } from './cart-payment-methods/cart-payment-methods.service';
import { DaffInMemoryBackendCartShippingMethodsService } from './cart-shipping-methods/cart-shipping-methods.service';
import { DaffInMemoryBackendCartPaymentService } from './cart-payment/cart-payment.service';
import { DaffInMemoryBackendCartShippingInformationService } from './cart-shipping-information/cart-shipping-information.service';
/**
 * The root cart in-memory backend.
 * Creates the database and delegates requests to child backends.
 */
export declare class DaffInMemoryBackendCartRootService implements InMemoryDbService, DaffInMemoryDataServiceInterface {
    private cartService;
    private cartItemsService;
    private cartOrderService;
    private cartCouponService;
    private cartAddressService;
    private cartShippingAddressService;
    private cartBillingAddressService;
    private cartPaymentMethodsService;
    private cartShippingMethodsService;
    private cartPaymentService;
    private cartShippingInformationService;
    /**
     * The collections that the root service manages.
     * Useful for a higher-level backend that delegates to this one based on collection name.
     */
    static readonly COLLECTION_NAMES: string[];
    carts: DaffCart[];
    constructor(cartService: DaffInMemoryBackendCartService, cartItemsService: DaffInMemoryBackendCartItemsService, cartOrderService: DaffInMemoryBackendCartOrderService, cartCouponService: DaffInMemoryBackendCartCouponService, cartAddressService: DaffInMemoryBackendCartAddressService, cartShippingAddressService: DaffInMemoryBackendCartShippingAddressService, cartBillingAddressService: DaffInMemoryBackendCartBillingAddressService, cartPaymentMethodsService: DaffInMemoryBackendCartPaymentMethodsService, cartShippingMethodsService: DaffInMemoryBackendCartShippingMethodsService, cartPaymentService: DaffInMemoryBackendCartPaymentService, cartShippingInformationService: DaffInMemoryBackendCartShippingInformationService);
    createDb(reqInfo: RequestInfo): {
        cart: DaffCart[];
    };
    get(reqInfo: RequestInfo): any;
    post(reqInfo: RequestInfo): any;
    put(reqInfo: RequestInfo): any;
    delete(reqInfo: RequestInfo): any;
    private delegateRequest;
}
