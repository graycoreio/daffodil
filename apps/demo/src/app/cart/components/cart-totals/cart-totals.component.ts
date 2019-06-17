import { Component, OnInit, Input } from '@angular/core';

import { DaffCart } from '@daffodil/cart';

@Component({
  selector: 'demo-cart-totals',
  templateUrl: './cart-totals.component.html',
  styleUrls: ['./cart-totals.component.scss']
})
export class CartTotalsComponent implements OnInit {

  @Input() cart: DaffCart;

  cartTax: number;

  ngOnInit() {
    this.cartTax = this.calculateTotalTax(this.cart);
  }

  private calculateTotalTax(cart: DaffCart) {
    let totalTax = 0;

    for (const item of cart.items) {
      totalTax += item.tax_amount;
    }

    return totalTax;
  }
}
