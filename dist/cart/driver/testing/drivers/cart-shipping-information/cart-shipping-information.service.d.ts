import { Observable } from 'rxjs';
import { DaffCart, DaffCartShippingRate } from '@daffodil/cart';
import { DaffCartShippingInformationServiceInterface } from '@daffodil/cart/driver';
import { DaffCartFactory, DaffCartShippingRateFactory } from '@daffodil/cart/testing';
export declare class DaffTestingCartShippingInformationService implements DaffCartShippingInformationServiceInterface {
    private shippingInfoFactory;
    private cartFactory;
    constructor(shippingInfoFactory: DaffCartShippingRateFactory, cartFactory: DaffCartFactory);
    get(cartId: DaffCart['id']): Observable<DaffCartShippingRate>;
    update(cartId: DaffCart['id'], info: Partial<DaffCartShippingRate>): Observable<Partial<DaffCart>>;
    delete(cartId: DaffCart['id']): Observable<Partial<DaffCart>>;
}
