import { AsyncPipe } from '@angular/common';
import {
  Component,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCart } from '@daffodil/cart';
import {
  DaffCartFacade,
  DaffCartPlaceOrder,
} from '@daffodil/cart/state';
import { DaffButtonComponent } from '@daffodil/design/button';

@Component({
  selector: 'demo-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss'],
  imports: [
    DaffButtonComponent,
    AsyncPipe,
  ],
})
export class PlaceOrderComponent implements OnInit {
  enablePlaceOrderButton$: Observable<boolean>;
  cart$: Observable<DaffCart>;

  constructor(
    private cartFacade: DaffCartFacade,
  ) { }

  ngOnInit() {
    this.enablePlaceOrderButton$ = this.cartFacade.canPlaceOrder$;
    this.cart$ = this.cartFacade.cart$;
  }

  placeOrder() {
    this.cartFacade.dispatch(new DaffCartPlaceOrder());
  }
}
