import { Component, Input } from '@angular/core';
import { Cart } from '@daffodil/core';

@Component({
  selector: 'cart-async-wrapper',
  templateUrl: './cart-async-wrapper.component.html',
  styleUrls: ['./cart-async-wrapper.component.scss']
})
export class CartAsyncWrapperComponent {

  @Input() cart: Cart;

  get isCartEmpty() {
    return this.cart.items.length === 0;
  }
}
