import { Component, Input } from '@angular/core';
import { Cart } from '@daffodil/core';

@Component({
  selector: 'cart-wrapper',
  templateUrl: './cart-wrapper.component.html',
  styleUrls: ['./cart-wrapper.component.scss']
})
export class CartWrapperComponent {

  @Input() cart: Cart;

  get isCartEmpty():boolean {
    return this.cart.items.length === 0;
  }

  get cartHasOneItem():boolean {
    return this.cart.items.length === 1;
  }

  get itemText():string {
    return this.cartHasOneItem ? 'Item' : 'Items';
  }
}
