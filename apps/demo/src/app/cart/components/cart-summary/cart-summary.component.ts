import {
  Component,
  Input,
} from '@angular/core';
import { Router } from '@angular/router';

import { DaffCart } from '@daffodil/cart';

@Component({
  selector: 'demo-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss'],
  standalone: false,
})
export class CartSummaryComponent {

  @Input() cart: DaffCart;
  @Input() title: string;

  constructor(
    private router: Router,
  ) { }

  navigateToCart = () => {
    this.router.navigateByUrl('/cart');
  };
}
