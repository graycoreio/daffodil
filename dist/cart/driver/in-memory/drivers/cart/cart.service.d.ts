import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DaffCart } from '@daffodil/cart';
import { DaffCartServiceInterface } from '@daffodil/cart/driver';
export declare class DaffInMemoryCartService implements DaffCartServiceInterface<DaffCart> {
    private http;
    url: string;
    constructor(http: HttpClient);
    get(cartId: DaffCart['id']): Observable<DaffCart>;
    addToCart(productId: string, qty: number): Observable<DaffCart>;
    clear(cartId: DaffCart['id']): Observable<Partial<DaffCart>>;
    create(): Observable<{
        id: DaffCart['id'];
    }>;
}
