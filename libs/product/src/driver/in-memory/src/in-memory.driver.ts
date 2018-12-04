import { Injectable } from '@angular/core';

import { DaffDriverInterface } from '../../src/service-interfaces/driver.interface';

import { DaffInMemoryProductService } from './product/services/product.service';

@Injectable({
    providedIn: 'root'
})
export class DaffInMemoryDriver implements DaffDriverInterface {
    constructor(
        public productService: DaffInMemoryProductService
    ){}
}