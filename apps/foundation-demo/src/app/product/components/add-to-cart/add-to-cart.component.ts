import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent {

  @Input() additive: any;
  @Output() addToCart: EventEmitter<any> = new EventEmitter();

  onAddToCart() {
    this.emitAddToCart();
  }

  emitAddToCart() {
    this.addToCart.emit(this.additive);
  }
}
