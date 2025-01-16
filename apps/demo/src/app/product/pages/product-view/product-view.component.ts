import {
  Component,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  ParamMap,
} from '@angular/router';
import { Observable } from 'rxjs';
import {
  take,
  filter,
  map,
} from 'rxjs/operators';

import { DaffCartItemInput } from '@daffodil/cart';
import {
  DaffCartFacade,
  DaffCartItemAdd,
} from '@daffodil/cart/state';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductPageFacade,
  DaffProductLoad,
} from '@daffodil/product/state';

@Component({
  selector: 'demo-product-view',
  templateUrl: './product-view.component.html',
  standalone: false,
})
export class ProductViewComponent implements OnInit {

  product$: Observable<DaffProduct>;
  loading$: Observable<boolean>;
  routingId$: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private productViewFacade: DaffProductPageFacade,
    private cartFacade: DaffCartFacade,
  ) { }

  updateQty(qty: number) {}

  ngOnInit() {
    this.routingId$ = this.route.paramMap.pipe(
      filter((params: ParamMap) => params.get('id') != null),
      take(1),
      map((params) => params.get('id')),
    );

    this.routingId$.subscribe((id) => {
      this.productViewFacade.dispatch(new DaffProductLoad(id));
    });


    this.product$ = this.productViewFacade.product$;
    this.loading$ = this.productViewFacade.loading$;
  }

  onAddToCart(cartItem: DaffCartItemInput) {
    this.cartFacade.dispatch(new DaffCartItemAdd(cartItem));
  }
}
