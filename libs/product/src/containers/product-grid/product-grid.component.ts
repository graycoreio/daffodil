import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';

import * as fromProduct from '../../reducers/index';
import { ProductGridLoad } from '../../actions/product-grid.actions';
import { Product } from '../../models/product';

@Component({
  selector: '[product-grid-container]',
  template: '<ng-content></ng-content>',
  exportAs: 'ProductGridContainer'
})
export class ProductGridContainer implements OnInit {

  loading$: Observable<boolean>;
  products$: Observable<Product[]>;

  constructor(
    private store: Store<fromProduct.State>
  ) { }

  ngOnInit() {
    this.store.dispatch(new ProductGridLoad());

    this.loading$ = this.store.pipe(select(fromProduct.selectProductGridLoadingState));

    this.products$ = this.store.pipe(select(fromProduct.selectAllProducts));
  }

}
