import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent {

  @Output() addToCart: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router
  ) { }

  onAddToCart() {
    this.emitAddToCart();
    this.redirectToCart();
  }

  emitAddToCart() {
    this.addToCart.emit();
  }

  redirectToCart() {
    this.router.navigateByUrl('/cart');
  }
}
