import {
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

import { DaffCart } from '@daffodil/cart';

@Component({
  selector: 'demo-cart-summary-wrapper',
  templateUrl: './cart-summary-wrapper.component.html',
  styleUrls: ['./cart-summary-wrapper.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: false,
})
export class CartSummaryWrapperComponent {

  @Input() cart: DaffCart;
  @Input() loading: boolean;
  @Input() cartTitle: string;
}
