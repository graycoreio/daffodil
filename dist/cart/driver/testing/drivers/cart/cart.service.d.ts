import { Observable } from 'rxjs';
import { DaffCart } from '@daffodil/cart';
import { DaffCartServiceInterface } from '@daffodil/cart/driver';
import { DaffCartFactory } from '@daffodil/cart/testing';
export declare class DaffTestingCartService implements DaffCartServiceInterface {
    private cartFactory;
    constructor(cartFactory: DaffCartFactory);
    get(id: number | string): Observable<DaffCart>;
    addToCart(productId: string, qty: number): Observable<DaffCart>;
    clear(id: number | string): Observable<DaffCart>;
    create(): Observable<{
        id: string | number;
    }>;
}
