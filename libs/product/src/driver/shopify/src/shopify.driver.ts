import { Injectable } from '@angular/core';

import { DaffDriverInterface } from '../../src/service-interfaces/driver.interface';
import { DaffShopifyProductService } from './product/services/product.service';

@Injectable({
    providedIn: 'root'
})
export class DaffShopifyDriver implements DaffDriverInterface {
    constructor(
        public productService: DaffShopifyProductService
    ){}
}