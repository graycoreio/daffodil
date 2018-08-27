import { Injectable } from '@angular/core';

import { DaffDriverInterface } from '@daffodil/driver';

import { DaffInMemoryProductService } from './product/services/product.service';
import { DaffInMemoryCartService } from './cart/services/cart.service';

@Injectable({
    providedIn: 'root'
})
export class DaffInMemoryDriver implements DaffDriverInterface {
    constructor(
        public productService: DaffInMemoryProductService,
        public cartService: DaffInMemoryCartService,
    ){}
}