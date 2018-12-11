import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Cart } from '@daffodil/cart';

@Component({
  selector: 'checkout-cart',
  templateUrl: './checkout-cart.component.html',
  styleUrls: ['./checkout-cart.component.scss']
})
export class CheckoutCartComponent {

  @Input() cart: Cart;
  @Input() subtitle: string;

  constructor(
    private router: Router
  ) { }

  navigateToCart = () => {
    this.router.navigateByUrl('/cart');
  }
}
