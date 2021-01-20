import { Observable } from 'rxjs';
import { DaffCart, DaffCartPaymentMethod } from '@daffodil/cart';
import { DaffCartPaymentMethodsServiceInterface } from '@daffodil/cart/driver';
import { DaffCartPaymentFactory } from '@daffodil/cart/testing';
export declare class DaffTestingCartPaymentMethodsService implements DaffCartPaymentMethodsServiceInterface {
    private paymentFactory;
    constructor(paymentFactory: DaffCartPaymentFactory);
    list(cartId: DaffCart['id']): Observable<DaffCartPaymentMethod[]>;
}
