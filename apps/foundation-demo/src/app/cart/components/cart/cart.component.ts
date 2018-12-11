import { Component, Input } from '@angular/core';
import { Cart } from '@daffodil/cart';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  @Input() cart: Cart;
}
