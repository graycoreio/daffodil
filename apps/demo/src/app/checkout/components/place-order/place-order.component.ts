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

@Component({
  selector: 'demo-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss'],
  standalone: false,
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
