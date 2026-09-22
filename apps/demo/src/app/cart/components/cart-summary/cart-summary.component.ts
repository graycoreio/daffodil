import {
  Component,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { Router } from '@angular/router';

import { DaffCart } from '@daffodil/cart';

import { MiniCartItemComponent } from '../minicart-item/minicart-item.component';

@Component({
  selector: 'demo-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    MiniCartItemComponent,
  ],
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
