import { CurrencyPipe } from '@angular/common';
import {
  Component,
  Input,
} from '@angular/core';

import {
  DaffCart,
  DaffCartTotal,
  DaffCartTotalTypeEnum,
} from '@daffodil/cart';

import { CartTotalsItemComponent } from '../cart-totals-item/cart-totals-item.component';

@Component({
  selector: 'demo-cart-totals',
  templateUrl: './cart-totals.component.html',
  styleUrls: ['./cart-totals.component.scss'],
  imports: [
    CurrencyPipe,
    CartTotalsItemComponent,
  ],
})
export class CartTotalsComponent {
  @Input() cart: DaffCart;

  get subtotal(): DaffCartTotal {
    return this.cart.totals[DaffCartTotalTypeEnum.subtotalExcludingTax];
  }

  get shipping(): DaffCartTotal {
    return this.cart.totals[DaffCartTotalTypeEnum.shipping];
  }

  get tax(): DaffCartTotal {
    return this.cart.totals[DaffCartTotalTypeEnum.tax];
  }

  get grandTotal(): DaffCartTotal {
    return this.cart.totals[DaffCartTotalTypeEnum.grandTotal];
  }
}
