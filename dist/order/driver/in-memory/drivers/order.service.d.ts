import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DaffOrder } from '@daffodil/order';
import { DaffOrderServiceInterface } from '@daffodil/order/driver';
export declare class DaffInMemoryOrderService implements DaffOrderServiceInterface<DaffOrder> {
    private http;
    url: string;
    constructor(http: HttpClient);
    get(orderId: DaffOrder['id']): Observable<DaffOrder>;
    list(): Observable<DaffOrder[]>;
}
