import { Observable } from 'rxjs';
import { DaffCart, DaffCartPaymentMethod, DaffCartAddress } from '@daffodil/cart';
import { DaffCartPaymentServiceInterface } from '@daffodil/cart/driver';
import { DaffCartFactory, DaffCartPaymentFactory } from '@daffodil/cart/testing';
export declare class DaffTestingCartPaymentService implements DaffCartPaymentServiceInterface {
    private paymentFactory;
    private cartFactory;
    constructor(paymentFactory: DaffCartPaymentFactory, cartFactory: DaffCartFactory);
    get(cartId: DaffCart['id']): Observable<DaffCartPaymentMethod>;
    update(cartId: DaffCart['id'], payment: Partial<DaffCartPaymentMethod>): Observable<Partial<DaffCart>>;
    updateWithBilling(cartId: DaffCart['id'], payment: Partial<DaffCartPaymentMethod>, address: Partial<DaffCartAddress>): Observable<Partial<DaffCart>>;
    remove(cartId: DaffCart['id']): Observable<void>;
}
