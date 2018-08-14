import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '@daffodil/core';
import { Router } from '@angular/router';

@Component({
  selector: 'checkout-cart',
  templateUrl: './checkout-cart.component.html',
  styleUrls: ['./checkout-cart.component.scss']
})
export class CheckoutCartComponent implements OnInit {

  @Input() cart: Cart;
  @Input() subtitle: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if(this.cart.items.length === 0) {
      this.navigateToCart();
    }
  }

  navigateToCart = () => {
    this.router.navigateByUrl('/cart');
  }
}
