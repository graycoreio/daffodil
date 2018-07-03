import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent {

  @Output() addToCart: EventEmitter<any> = new EventEmitter();

  constructor() {}

  onAddToCart() {
    this.emitAddToCart();
  }

  emitAddToCart() {
    this.addToCart.emit();
  }
}
