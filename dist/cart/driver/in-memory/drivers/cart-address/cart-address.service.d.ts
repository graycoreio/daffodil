import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DaffCart, DaffCartAddress } from '@daffodil/cart';
import { DaffCartAddressServiceInterface } from '@daffodil/cart/driver';
export declare class DaffInMemoryCartAddressService implements DaffCartAddressServiceInterface<DaffCartAddress, DaffCart> {
    private http;
    url: string;
    constructor(http: HttpClient);
    update(cartId: DaffCart['id'], address: DaffCartAddress): Observable<Partial<DaffCart>>;
}
