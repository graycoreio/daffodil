import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '@daffodil/core';

@Component({
  selector: 'cart-async-wrapper',
  templateUrl: './cart-async-wrapper.component.html',
  styleUrls: ['./cart-async-wrapper.component.scss']
})
export class CartAsyncWrapperComponent implements OnInit {

  @Input() cart: Cart;
  @Input() loading: boolean;

  constructor() { }

  ngOnInit() {
  }

  get isLoadedCartEmpty() {
    return this.loading === true || this.cart.items.length === 0;
  }
}
