import { Injectable } from '@angular/core';

import { DaffDriverInterface } from '@daffodil/driver';
import { DaffTestingProductService } from './product/services/product.service';
import { DaffTestingCartService } from './cart/services/cart.service';

@Injectable({
    providedIn: 'root'
})
export class DaffTestingDriver implements DaffDriverInterface {
    constructor(
        public productService: DaffTestingProductService,
        public cartService: DaffTestingCartService,
    ){}
}