import { Injectable } from '@angular/core';

import { DaffDriverInterface } from '@daffodil/driver';
import { DaffShopifyProductService } from './product/services/product.service';
import { DaffShopifyCartService } from './cart/services/cart.service';

@Injectable({
    providedIn: 'root'
})
export class DaffShopifyDriver implements DaffDriverInterface {
    constructor(
        public productService: DaffShopifyProductService,
        public cartService: DaffShopifyCartService,
    ){}
}