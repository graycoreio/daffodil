import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffCart } from '@daffodil/cart';

import * as fromCart from '../../selectors/cart-selector';

@Component({
  selector: 'demo-cart-wrapper',
  templateUrl: './cart-wrapper.component.html',
  styleUrls: ['./cart-wrapper.component.scss']
})
export class CartWrapperComponent implements OnInit{
  
  @Input() cart: DaffCart;

  isCartEmpty$ : Observable<boolean>;
  itemCount$ : Observable<number>;

  constructor(
    private store: Store<fromCart.State>
  ) {}

  ngOnInit(): void {
    this.isCartEmpty$ = this.store.pipe(select(fromCart.isCartEmpty));
    this.itemCount$ = this.store.pipe(select(fromCart.selectCartItemCount));

  }
}
