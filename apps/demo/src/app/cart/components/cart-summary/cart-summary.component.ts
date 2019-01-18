import { Component, Input } from '@angular/core';
import { Cart } from '@daffodil/core';
import { Router } from '@angular/router';

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
