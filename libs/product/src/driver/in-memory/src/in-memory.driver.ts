import { Injectable } from '@angular/core';

import { DaffDriverInterface } from '@daffodil/product';

import { DaffInMemoryProductService } from './product/services/product.service';

@Injectable({
    providedIn: 'root'
})
export class DaffInMemoryDriver implements DaffDriverInterface {
    constructor(
        public productService: DaffInMemoryProductService
    ){}
}