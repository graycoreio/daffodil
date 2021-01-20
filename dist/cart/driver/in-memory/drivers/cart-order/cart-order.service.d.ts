import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DaffCart, DaffCartPaymentMethod, DaffCartOrderResult } from '@daffodil/cart';
import { DaffCartOrderServiceInterface } from '@daffodil/cart/driver';
export declare class DaffInMemoryCartOrderService implements DaffCartOrderServiceInterface {
    private http;
    url: string;
    constructor(http: HttpClient);
    placeOrder(cartId: DaffCart['id'], payment?: DaffCartPaymentMethod): Observable<DaffCartOrderResult>;
}
