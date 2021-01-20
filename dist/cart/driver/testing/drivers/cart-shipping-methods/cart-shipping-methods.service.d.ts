import { Observable } from 'rxjs';
import { DaffCart, DaffCartShippingRate } from '@daffodil/cart';
import { DaffCartShippingMethodsServiceInterface } from '@daffodil/cart/driver';
import { DaffCartShippingRateFactory } from '@daffodil/cart/testing';
export declare class DaffTestingCartShippingMethodsService implements DaffCartShippingMethodsServiceInterface {
    private shippingInfoFactory;
    constructor(shippingInfoFactory: DaffCartShippingRateFactory);
    list(cartId: DaffCart['id']): Observable<DaffCartShippingRate[]>;
}
