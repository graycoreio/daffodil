import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Cart } from '@daffodil/core';

@Component({
  selector: 'cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CartSummaryComponent implements OnInit {

  @Input() cart: Cart;

  cartTax: number;

  constructor() { }

  ngOnInit() {
    this.cartTax = this.calculateTotalTax(this.cart);
  }

  private calculateTotalTax(cart: Cart) {
    let totalTax: number = 0;

    for (let item of cart.items) {
      totalTax += item.tax_amount;
    }

    return totalTax;
  }
}
