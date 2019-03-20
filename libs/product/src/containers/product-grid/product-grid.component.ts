import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';

import * as fromProduct from '../../reducers/index';
import { ProductGridLoad } from '../../actions/product-grid.actions';
import { Product } from '../../models/product';

/**
 * A component for attaching a list of products to an application view.
 * 
 * @Param store - a redux store of Products.
 */
@Component({
  selector: '[product-grid-container]',
  template: '<ng-content></ng-content>',
  exportAs: 'ProductGridContainer'
})
export class ProductGridContainer implements OnInit {

  /**
   * Tracks the loading status of the list of products in the redux store.
   */
  loading$: Observable<boolean>;
  /**
   * An Observable of an array of Products.
   */
  products$: Observable<Product[]>;

  constructor(
    private store: Store<fromProduct.State>
  ) { }

  /**
   * An Angular lifecycle method.
   */
  ngOnInit() {
    this.store.dispatch(new ProductGridLoad());

    this.loading$ = this.store.pipe(select(fromProduct.selectProductGridLoadingState));

    this.products$ = this.store.pipe(select(fromProduct.selectAllProducts));
  }

}
