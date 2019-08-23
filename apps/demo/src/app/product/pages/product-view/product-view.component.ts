import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { DaffProductFacade, DaffProductLoad, DaffProductUnion } from '@daffodil/product';
import { tap, take, } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'demo-product-view',
  templateUrl: './product-view.component.html'
})
export class ProductViewComponent implements OnInit {

  product$: Observable<DaffProductUnion>;
  loading$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private productViewFacade: DaffProductFacade
  ) { }

  updateQty(qty: number) {
    
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      tap(
        (params: ParamMap) => 
        this.productViewFacade.dispatch(new DaffProductLoad(params.get('id')))
      ),
      take(1)
    ).subscribe();


    this.product$ = this.productViewFacade.product$;
    this.loading$ = this.productViewFacade.loading$;
  }
}
