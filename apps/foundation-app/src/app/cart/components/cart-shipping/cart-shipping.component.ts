import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '@daffodil/core';

@Component({
  selector: 'cart-shipping',
  templateUrl: './cart-shipping.component.html',
  styleUrls: ['./cart-shipping.component.scss']
})
export class CartShippingComponent implements OnInit {

  @Input() cart: Cart

  constructor() { }

  ngOnInit() {
  }
}
