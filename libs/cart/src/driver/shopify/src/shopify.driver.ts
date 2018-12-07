import { Injectable } from '@angular/core';

import { DaffShopifyCartService } from './cart/services/cart.service';
import { DaffDriverInterface } from '../../src';

@Injectable({
    providedIn: 'root'
})
export class DaffShopifyDriver implements DaffDriverInterface {
    constructor(
        public cartService: DaffShopifyCartService,
    ){}
}