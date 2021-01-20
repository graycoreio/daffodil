import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DaffCartShippingRate, DaffCart } from '@daffodil/cart';
import { DaffCartShippingMethodsServiceInterface } from '@daffodil/cart/driver';
export declare class DaffInMemoryCartShippingMethodsService implements DaffCartShippingMethodsServiceInterface<DaffCartShippingRate> {
    private http;
    url: string;
    constructor(http: HttpClient);
    list(cartId: DaffCart['id']): Observable<DaffCartShippingRate[]>;
}
