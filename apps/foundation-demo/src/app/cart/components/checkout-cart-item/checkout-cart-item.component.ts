import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from '@daffodil/cart';

@Component({
  selector: 'checkout-cart-item',
  templateUrl: './checkout-cart-item.component.html',
  styleUrls: ['./checkout-cart-item.component.scss']
})
export class CheckoutCartItemComponent implements OnInit {

  @Input() item: CartItem;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  redirectToProduct() {
    this.router.navigateByUrl('/product/' + this.item.product_id);
  }
}
