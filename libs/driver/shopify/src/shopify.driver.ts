import { Injectable } from '@angular/core';

import { DaffDriverInterface } from '@daffodil/driver';
import { DaffShopifyCartService } from './cart/services/cart.service';

@Injectable({
    providedIn: 'root'
})
export class DaffShopifyDriver implements DaffDriverInterface {
    constructor(
        public cartService: DaffShopifyCartService,
    ){}
}