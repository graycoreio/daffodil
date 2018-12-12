import { Injectable } from '@angular/core';

import { DaffDriverInterface } from '@daffodil/driver';
import { DaffTestingCartService } from './cart/services/cart.service';

@Injectable({
    providedIn: 'root'
})
export class DaffTestingDriver implements DaffDriverInterface {
    constructor(
        public cartService: DaffTestingCartService,
    ){}
}