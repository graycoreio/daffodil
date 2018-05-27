import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '@daffodil/core';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input() cart: Cart;

  hasMultipleItems: boolean = false;

  constructor() { }

  ngOnInit() {
    if (this.cart.items.length > 1) {
      this.hasMultipleItems = true;
    }
  }

  getItemText() {
    return this.hasMultipleItems ? 'Items' : 'Item';
  }
}
