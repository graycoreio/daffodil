import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Cart } from '@daffodil/core';
import { Router } from '@angular/router';

@Component({
  selector: 'checkout-cart-async-wrapper',
  templateUrl: './checkout-cart-async-wrapper.component.html',
  styleUrls: ['./checkout-cart-async-wrapper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CheckoutCartAsyncWrapperComponent {

  @Input() cart: Cart;
  @Input() loading: boolean;
  @Input() cartTitle: string;
}
