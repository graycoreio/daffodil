import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DaffCartAddress, DaffCart } from '@daffodil/cart';
import { DaffCartShippingAddressServiceInterface } from '@daffodil/cart/driver';
export declare class DaffInMemoryCartShippingAddressService implements DaffCartShippingAddressServiceInterface<DaffCartAddress, DaffCart> {
    private http;
    url: string;
    constructor(http: HttpClient);
    get(cartId: DaffCart['id']): Observable<DaffCartAddress>;
    update(cartId: DaffCart['id'], address: Partial<DaffCartAddress>): Observable<Partial<DaffCart>>;
}
