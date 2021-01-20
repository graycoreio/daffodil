import { Observable } from 'rxjs';
import { DaffCart, DaffCartAddress } from '@daffodil/cart';
import { DaffCartBillingAddressServiceInterface } from '@daffodil/cart/driver';
import { DaffCartAddressFactory, DaffCartFactory } from '@daffodil/cart/testing';
export declare class DaffTestingCartBillingAddressService implements DaffCartBillingAddressServiceInterface {
    private addressFactory;
    private cartFactory;
    constructor(addressFactory: DaffCartAddressFactory, cartFactory: DaffCartFactory);
    get(cartId: DaffCart['id']): Observable<DaffCartAddress>;
    update(cartId: DaffCart['id'], address: DaffCartAddress): Observable<Partial<DaffCart>>;
}
