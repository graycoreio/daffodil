import {
  Component,
  Input,
} from '@angular/core';

import {
  DaffCart,
  DaffCartTotal,
  DaffCartTotalTypeEnum,
} from '@daffodil/cart';

@Component({
  selector: 'demo-cart-totals',
  templateUrl: './cart-totals.component.html',
  styleUrls: ['./cart-totals.component.scss'],
  standalone: false,
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
