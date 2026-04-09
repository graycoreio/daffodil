import {
  Component,
  Input,
} from '@angular/core';

import { DaffCart } from '@daffodil/cart';

import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'demo-cart-items',
  templateUrl: './cart-items.component.html',
  imports: [
    CartItemComponent,
  ],
})
export class CartItemsComponent {

  @Input() cart: DaffCart;
}
