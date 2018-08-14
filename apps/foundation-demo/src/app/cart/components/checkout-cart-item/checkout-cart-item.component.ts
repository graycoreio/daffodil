import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from '@daffodil/core';
import { Router } from '@angular/router';

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
    this.router.navigateByUrl('/product/' + this.item.item_id);
  }
}
