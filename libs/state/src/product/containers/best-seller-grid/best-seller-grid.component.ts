import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';

import { Product } from '@daffodil/core';

import * as fromBestSeller from '../../reducers/index';
import { BestSellerGridLoad } from '../../actions/best-seller-grid.actions';

@Component({
  selector: '[best-seller-grid-container]',
  template: '<ng-content></ng-content>',
  exportAs: 'BestSellerGridContainer'
})
export class BestSellerGridContainer implements OnInit {

  loading$: Observable<boolean>;
  products$: Observable<Product[]>;

  constructor(
    private store: Store<fromBestSeller.State>
  ) { }

  ngOnInit() {
    this.store.dispatch(new BestSellerGridLoad());

    this.loading$ = this.store.pipe(
      select(fromBestSeller.selectBestSellerGridLoadingState)
    );

    this.products$ = this.store.pipe(
      select(fromBestSeller.selectAllBestSeller)
    );
  }

}
