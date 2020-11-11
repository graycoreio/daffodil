import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffCart } from '@daffodil/cart';
import { DaffCartFacade } from '@daffodil/cart/state';

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
		private facade: DaffCartFacade
  ) {}

  ngOnInit(): void {
    this.itemCount$ = this.facade.items$.pipe(
			map(items => items.length)
		);
    this.isCartEmpty$ = this.facade.isCartEmpty$;
  }
}
