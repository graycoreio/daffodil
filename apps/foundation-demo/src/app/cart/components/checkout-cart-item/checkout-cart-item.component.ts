import { Component, Input } from '@angular/core';
import { CartItem } from '@daffodil/core';
import { Router } from '@angular/router';

@Component({
  selector: 'demo-checkout-cart-item',
  templateUrl: './checkout-cart-item.component.html',
  styleUrls: ['./checkout-cart-item.component.scss']
})
export class CheckoutCartItemComponent {

  @Input() item: CartItem;

  constructor(
    private router: Router
  ) { }

  redirectToProduct() {
    this.router.navigateByUrl('/product/' + this.item.product_id);
  }
}
