import { DocumentNode } from 'graphql';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { DaffCart } from '@daffodil/cart';
import { DaffOrder } from '@daffodil/order';
import { DaffOrderServiceInterface } from '@daffodil/order/driver';
/**
 * A service for making Magento GraphQL queries for orders.
 */
export declare class DaffOrderMagentoService implements DaffOrderServiceInterface {
    private apollo;
    extraOrderFragments: DocumentNode[];
    constructor(apollo: Apollo, extraOrderFragments: DocumentNode[]);
    list(cartId?: DaffCart['id']): Observable<DaffOrder[]>;
    get(orderId: DaffOrder['id'], cartId?: DaffCart['id']): Observable<DaffOrder>;
}
