import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DaffCartShippingRate, DaffCart } from '@daffodil/cart';
import { DaffCartShippingInformationServiceInterface } from '@daffodil/cart/driver';
export declare class DaffInMemoryCartShippingInformationService implements DaffCartShippingInformationServiceInterface<DaffCartShippingRate, DaffCart> {
    private http;
    url: string;
    constructor(http: HttpClient);
    get(cartId: DaffCart['id']): Observable<DaffCartShippingRate>;
    update(cartId: DaffCart['id'], info: Partial<DaffCartShippingRate>): Observable<Partial<DaffCart>>;
    delete(cartId: DaffCart['id']): Observable<Partial<DaffCart>>;
}
