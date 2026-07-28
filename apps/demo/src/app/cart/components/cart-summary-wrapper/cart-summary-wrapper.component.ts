import {
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

import { DaffCart } from '@daffodil/cart';
import { DAFF_SPINNER_COMPONENTS } from '@daffodil/design/spinner';

import { HelpBoxComponent } from '../../../misc/help-box/help-box.component';
import { CartSummaryComponent } from '../cart-summary/cart-summary.component';
import { CartTotalsComponent } from '../cart-totals/cart-totals.component';

@Component({
  selector: 'demo-cart-summary-wrapper',
  templateUrl: './cart-summary-wrapper.component.html',
  styleUrls: ['./cart-summary-wrapper.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    CartSummaryComponent,
    CartTotalsComponent,
    DAFF_SPINNER_COMPONENTS,
    HelpBoxComponent,
  ],
})
export class CartSummaryWrapperComponent {

  @Input() cart: DaffCart;
  @Input() loading: boolean;
  @Input() cartTitle: string;
}
