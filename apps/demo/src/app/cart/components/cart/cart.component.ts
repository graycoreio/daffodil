import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCart, DaffCartFacade } from '@daffodil/cart';
import { map } from 'rxjs/operators';

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
		private facade: DaffCartFacade<DaffCart>
  ) {}

  ngOnInit(): void {
    this.itemCount$ = this.facade.items$.pipe(
			map(items => items.length)
		);
    this.isCartEmpty$ = this.facade.isCartEmpty$;
  }
}
