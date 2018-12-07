import { Injectable } from '@angular/core';

import { DaffInMemoryCartService } from './cart/services/cart.service';
import { DaffDriverInterface } from '../../src';

@Injectable({
    providedIn: 'root'
})
export class DaffInMemoryDriver implements DaffDriverInterface {
    constructor(
        public cartService: DaffInMemoryCartService,
    ){}
}