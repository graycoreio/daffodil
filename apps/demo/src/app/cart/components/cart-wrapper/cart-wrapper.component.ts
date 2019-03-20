import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Cart } from '@daffodil/cart';

import * as fromCart from '../../selectors/cart-selector';

@Component({
  selector: 'demo-cart-wrapper',
  templateUrl: './cart-wrapper.component.html',
  styleUrls: ['./cart-wrapper.component.scss']
})
export class CartWrapperComponent {

  constructor(
    private store: Store<fromCart.State>
  ) {}

  @Input() cart: Cart;

  get isCartEmpty$():Observable<boolean> {
    return this.store.pipe(select(fromCart.isCartEmpty));
  }

  get itemCount$():Observable<number> {
    return this.store.pipe(select(fromCart.selectCartItemCount));
  }
}
