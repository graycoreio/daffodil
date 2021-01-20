import { Observable } from 'rxjs';
import { DaffCart, DaffCartAddress } from '@daffodil/cart';
import { DaffCartAddressServiceInterface } from '@daffodil/cart/driver';
import { DaffCartAddressFactory, DaffCartFactory } from '@daffodil/cart/testing';
export declare class DaffTestingCartAddressService implements DaffCartAddressServiceInterface {
    private addressFactory;
    private cartFactory;
    constructor(addressFactory: DaffCartAddressFactory, cartFactory: DaffCartFactory);
    update(cartId: DaffCart['id'], address: DaffCartAddress): Observable<Partial<DaffCart>>;
}
