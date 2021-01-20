import { Observable } from 'rxjs';
import { DaffCart, DaffCartItem, DaffCartItemInput } from '@daffodil/cart';
import { DaffCartItemServiceInterface } from '@daffodil/cart/driver';
import { DaffCartFactory, DaffCartItemFactory } from '@daffodil/cart/testing';
export declare class DaffTestingCartItemService implements DaffCartItemServiceInterface {
    private cartItemFactory;
    private cartFactory;
    constructor(cartItemFactory: DaffCartItemFactory, cartFactory: DaffCartFactory);
    list(cartId: DaffCart['id']): Observable<DaffCartItem[]>;
    get(cartId: DaffCart['id'], itemId: DaffCartItem['item_id']): Observable<DaffCartItem>;
    add(cartId: DaffCart['id'], input: DaffCartItemInput): Observable<Partial<DaffCart>>;
    update(cartId: DaffCart['id'], itemId: DaffCartItem['item_id'], item: Partial<DaffCartItem>): Observable<Partial<DaffCart>>;
    delete(cartId: string, itemId: string): Observable<Partial<DaffCart>>;
}
