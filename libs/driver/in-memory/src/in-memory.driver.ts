import { Injectable } from '@angular/core';

import { DaffDriverInterface } from '@daffodil/driver';

import { DaffInMemoryCartService } from './cart/services/cart.service';

@Injectable({
    providedIn: 'root'
})
export class DaffInMemoryDriver implements DaffDriverInterface {
    constructor(
        public cartService: DaffInMemoryCartService,
    ){}
}