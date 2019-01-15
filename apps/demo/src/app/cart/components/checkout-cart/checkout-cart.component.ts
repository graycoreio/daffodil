import { Component, Input } from '@angular/core';
import { Cart } from '@daffodil/core';
import { Router } from '@angular/router';

@Component({
  selector: 'demo-checkout-cart',
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
