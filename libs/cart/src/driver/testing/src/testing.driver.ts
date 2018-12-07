import { Injectable } from '@angular/core';

import { DaffTestingCartService } from './cart/services/cart.service';
import { DaffDriverInterface } from '../../src';

@Injectable({
    providedIn: 'root'
})
export class DaffTestingDriver implements DaffDriverInterface {
    constructor(
        public cartService: DaffTestingCartService,
    ){}
}