import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '@daffodil/core';

@Component({
  selector: 'cart-subtotal',
  templateUrl: './cart-subtotal.component.html',
  styleUrls: ['./cart-subtotal.component.scss']
})
export class CartSubtotalComponent implements OnInit {

  @Input() cart: Cart
  
  constructor() { }

  ngOnInit() {
  }

}
