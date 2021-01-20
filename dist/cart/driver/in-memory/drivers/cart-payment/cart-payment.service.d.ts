import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DaffCart, DaffCartPaymentMethod, DaffCartAddress } from '@daffodil/cart';
import { DaffCartPaymentServiceInterface } from '@daffodil/cart/driver';
export declare class DaffInMemoryCartPaymentService implements DaffCartPaymentServiceInterface {
    private http;
    url: string;
    constructor(http: HttpClient);
    get(cartId: DaffCart['id']): Observable<DaffCartPaymentMethod>;
    update(cartId: DaffCart['id'], payment: Partial<DaffCartPaymentMethod>): Observable<Partial<DaffCart>>;
    updateWithBilling(cartId: DaffCart['id'], payment: Partial<DaffCartPaymentMethod>, address: Partial<DaffCartAddress>): Observable<Partial<DaffCart>>;
    remove(cartId: DaffCart['id']): Observable<void>;
}
