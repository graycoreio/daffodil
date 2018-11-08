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
    if (this.cart.items.length === 1) {
      return this.cart.items[0].qty === 1;
    }
    return this.cart.items.length === 1;
  }

  get itemText():string {
    return this.cartHasOneItem ? 'Item' : 'Items';
  }

  get itemCount():number {
    let itemCount: number = 0;
    this.cart.items.forEach(cartItem => {
      itemCount += cartItem.qty;
    })
    return itemCount;
  }
}
