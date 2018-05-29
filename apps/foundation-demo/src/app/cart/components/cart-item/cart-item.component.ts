import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from '@daffodil/core';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() item: CartItem;

  constructor() { }

  ngOnInit() {
  }
}
