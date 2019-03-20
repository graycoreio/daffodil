import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Cart } from '@daffodil/cart';

@Component({
  selector: 'demo-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent {

  @Input() cart: Cart;
  @Input() title: string;

  constructor(
    private router: Router
  ) { }

  navigateToCart = () => {
    this.router.navigateByUrl('/cart');
  }
}
