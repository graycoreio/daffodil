import {
  Component,
  Input,
} from '@angular/core';

import { DaffCart } from '@daffodil/cart';
import { DAFF_BUTTON_COMPONENTS } from '@daffodil/design/button';

import { HelpBoxComponent } from '../../../misc/help-box/help-box.component';
import { CartTotalsComponent } from '../cart-totals/cart-totals.component';
import { ProceedToCheckoutDirective } from '../proceed-to-checkout/proceed-to-checkout.directive';

@Component({
  selector: 'demo-cart-sidebar',
  templateUrl: './cart-sidebar.component.html',
  styleUrls: ['./cart-sidebar.component.scss'],
  imports: [
    CartTotalsComponent,
    ProceedToCheckoutDirective,
    DAFF_BUTTON_COMPONENTS,
    HelpBoxComponent,
  ],
})
export class CartSidebarComponent {

  @Input() isCartEmpty: boolean;
  @Input() cart: DaffCart;
}
