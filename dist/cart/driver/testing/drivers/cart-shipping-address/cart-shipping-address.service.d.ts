import { Observable } from 'rxjs';
import { DaffCart, DaffCartAddress } from '@daffodil/cart';
import { DaffCartShippingAddressServiceInterface } from '@daffodil/cart/driver';
import { DaffCartAddressFactory, DaffCartFactory } from '@daffodil/cart/testing';
export declare class DaffTestingCartShippingAddressService implements DaffCartShippingAddressServiceInterface {
    private addressFactory;
    private cartFactory;
    constructor(addressFactory: DaffCartAddressFactory, cartFactory: DaffCartFactory);
    get(cartId: DaffCart['id']): Observable<DaffCartAddress>;
    update(cartId: DaffCart['id'], address: DaffCartAddress): Observable<Partial<DaffCart>>;
}
