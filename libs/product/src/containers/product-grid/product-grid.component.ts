import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';

import * as fromProduct from '../../reducers/index';
import { DaffProductGridLoad } from '../../actions/product-grid.actions';
import { DaffProduct } from '../../models/product';

@Component({
  selector: '[product-grid-container]',
  template: '<ng-content></ng-content>',
  exportAs: 'ProductGridContainer'
})
export class DaffProductGridContainer implements OnInit {

  loading$: Observable<boolean>;
  products$: Observable<DaffProduct[]>;

  constructor(
    private store: Store<fromProduct.State>
  ) { }

  ngOnInit() {
    this.store.dispatch(new DaffProductGridLoad());

    this.loading$ = this.store.pipe(select(fromProduct.selectProductGridLoadingState));

    this.products$ = this.store.pipe(select(fromProduct.selectAllProducts));
  }

}
