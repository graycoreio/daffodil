import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DaffCartItem, DaffCartItemInput, DaffCart } from '@daffodil/cart';
import { DaffCartItemServiceInterface } from '@daffodil/cart/driver';
export declare class DaffInMemoryCartItemService implements DaffCartItemServiceInterface<DaffCartItem, DaffCartItemInput, DaffCart> {
    private http;
    url: string;
    constructor(http: HttpClient);
    list(cartId: DaffCart['id']): Observable<DaffCartItem[]>;
    get(cartId: DaffCart['id'], itemId: DaffCartItem['item_id']): Observable<DaffCartItem>;
    add(cartId: DaffCart['id'], input: DaffCartItemInput): Observable<Partial<DaffCart>>;
    update(cartId: DaffCart['id'], itemId: DaffCartItem['item_id'], item: Partial<DaffCartItem>): Observable<Partial<DaffCart>>;
    delete(cartId: string, itemId: string): Observable<Partial<DaffCart>>;
}
