import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DaffCartPaymentMethod, DaffCart } from '@daffodil/cart';
import { DaffCartPaymentMethodsServiceInterface } from '@daffodil/cart/driver';
export declare class DaffInMemoryCartPaymentMethodsService implements DaffCartPaymentMethodsServiceInterface<DaffCartPaymentMethod> {
    private http;
    url: string;
    constructor(http: HttpClient);
    list(cartId: DaffCart['id']): Observable<DaffCartPaymentMethod[]>;
}
