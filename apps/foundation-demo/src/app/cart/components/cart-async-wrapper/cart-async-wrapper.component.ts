import { Component, Input } from '@angular/core';
import { Cart } from '@daffodil/core';

@Component({
  selector: 'cart-async-wrapper',
  templateUrl: './cart-async-wrapper.component.html',
  styleUrls: ['./cart-async-wrapper.component.scss']
})
export class CartAsyncWrapperComponent {

  @Input() cart: Cart;
  @Input() loading: boolean;

  get isLoadedCartEmpty() {
    return this.loading || this.cart.items.length === 0;
  }
}
