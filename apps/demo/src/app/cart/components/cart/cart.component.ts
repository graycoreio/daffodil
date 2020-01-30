import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffCart } from '@daffodil/cart';

import * as fromCart from '../../selectors/cart-selector';

@Component({
  selector: 'demo-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input() cart: DaffCart;

  itemCount$ : Observable<number>;
  isCartEmpty$: Observable<boolean>;

  constructor(
    private store: Store<fromCart.State>
  ) {}

  ngOnInit(): void {
    this.itemCount$ = this.store.pipe(select(fromCart.selectCartItemCount));
    this.isCartEmpty$ = this.store.pipe(select(fromCart.isCartEmpty));
  }
}
