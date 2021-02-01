import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { take, filter, map, } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { DaffProductFacade, DaffProductLoad, DaffProduct } from '@daffodil/product';
import { DaffCartFacade, DaffCartItemAdd } from '@daffodil/cart/state';
import { DaffCartItemInput } from '@daffodil/cart';

@Component({
  selector: 'demo-product-view',
  templateUrl: './product-view.component.html'
})
export class ProductViewComponent implements OnInit {

  product$: Observable<DaffProduct>;
  loading$: Observable<boolean>;
  routingId$: Observable<string>;

  constructor(
    private route: ActivatedRoute,
		private productViewFacade: DaffProductFacade<DaffProduct>,
		private cartFacade: DaffCartFacade
  ) { }

  updateQty(qty: number) {

  }

  ngOnInit() {
    this.routingId$ = this.route.paramMap.pipe(
      filter((params: ParamMap) => params.get('id') != null),
      take(1),
      map((params) => params.get('id'))
    );

    this.routingId$.subscribe((id) => {
      this.productViewFacade.dispatch(new DaffProductLoad(id))
    });


    this.product$ = this.productViewFacade.product$;
    this.loading$ = this.productViewFacade.loading$;
	}

	onAddToCart(cartItem: DaffCartItemInput) {
		this.cartFacade.dispatch(new DaffCartItemAdd(cartItem));
	}
}
