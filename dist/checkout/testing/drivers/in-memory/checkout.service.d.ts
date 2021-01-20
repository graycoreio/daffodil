import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DaffCheckoutServiceInterface, DaffOrder } from '@daffodil/checkout';
export declare class DaffInMemoryCheckoutService implements DaffCheckoutServiceInterface {
    private http;
    url: string;
    constructor(http: HttpClient);
    placeOrder(cartId: string): Observable<DaffOrder>;
}
