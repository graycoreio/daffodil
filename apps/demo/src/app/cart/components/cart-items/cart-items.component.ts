import {
  Component,
  Input,
} from '@angular/core';

import { DaffCart } from '@daffodil/cart';

@Component({
  selector: 'demo-cart-items',
  templateUrl: './cart-items.component.html',
  standalone: false,
})
export class CartItemsComponent {

  @Input() cart: DaffCart;
}
