import {
  Component,
  Input,
} from '@angular/core';

import { DaffCart } from '@daffodil/cart';

@Component({
  selector: 'demo-cart-sidebar',
  templateUrl: './cart-sidebar.component.html',
  styleUrls: ['./cart-sidebar.component.scss'],
  standalone: false,
})
export class CartSidebarComponent {

  @Input() isCartEmpty: boolean;
  @Input() cart: DaffCart;
}
