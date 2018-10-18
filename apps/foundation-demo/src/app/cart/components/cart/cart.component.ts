import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '@daffodil/core';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input() cart: Cart;
  @Input() title: string;

  hasOneItem: boolean = false;

  constructor() { }

  ngOnInit() {
    this.hasOneItem = this.cart.items.length === 1;
  }

  get itemText() {
    return this.hasOneItem ? 'Item' : 'Items';
  }
}
