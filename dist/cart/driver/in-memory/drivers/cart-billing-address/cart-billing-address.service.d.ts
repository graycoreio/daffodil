import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DaffCartAddress, DaffCart } from '@daffodil/cart';
import { DaffCartBillingAddressServiceInterface } from '@daffodil/cart/driver';
export declare class DaffInMemoryCartBillingAddressService implements DaffCartBillingAddressServiceInterface<DaffCartAddress, DaffCart> {
    private http;
    url: string;
    constructor(http: HttpClient);
    get(cartId: DaffCart['id']): Observable<DaffCartAddress>;
    update(cartId: DaffCart['id'], address: DaffCartAddress): Observable<Partial<DaffCart>>;
}
