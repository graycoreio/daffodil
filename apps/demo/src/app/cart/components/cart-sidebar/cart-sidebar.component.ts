import { Component, Input, OnInit } from '@angular/core';

import { DaffCart } from '@daffodil/cart';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as fromCart from '../../selectors/cart-selector';

@Component({
  selector: 'demo-cart-sidebar',
  templateUrl: './cart-sidebar.component.html',
  styleUrls: ['./cart-sidebar.component.scss']
})
export class CartSidebarComponent implements OnInit {

  isCartEmpty$ : Observable<boolean>;

  @Input() cart: DaffCart;

  constructor(
    private store: Store<fromCart.State>
  ) {}

  ngOnInit(): void {
    this.isCartEmpty$ = this.store.pipe(select(fromCart.isCartEmpty));
  }
}
