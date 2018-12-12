import { Injectable } from '@angular/core';

import { DaffDriverInterface } from '@daffodil/product';
import { DaffShopifyProductService } from './product/services/product.service';

@Injectable({
    providedIn: 'root'
})
export class DaffShopifyDriver implements DaffDriverInterface {
    constructor(
        public productService: DaffShopifyProductService
    ){}
}