import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '@daffodil/core';

@Component({
  selector: 'cart-totals',
  templateUrl: './cart-totals.component.html'
})
export class CartTotalsComponent implements OnInit {

  @Input() cart: Cart;

  cartTax: number;

  constructor() { }

  ngOnInit() {
    this.cartTax = this.calculateTotalTax(this.cart);
  }

  private calculateTotalTax(cart: Cart) {
    let totalTax = 0;

    for (const item of cart.items) {
      totalTax += item.tax_amount;
    }

    return totalTax;
  }
}
