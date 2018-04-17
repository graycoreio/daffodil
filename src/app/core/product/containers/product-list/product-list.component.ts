import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from '@core/product/model/product';
import { Store, select } from '@ngrx/store';
import * as fromProduct from '../../reducers';
import { ProductListLoad } from '@core/product/actions/product-list.actions';

@Component({
  selector: '[product-list-container]',
  exportAs: 'ProductListContainer'
})
export class ProductListContainer implements OnInit {

  loading$: Observable<boolean>;
  products$: Observable<Product[]>;

  constructor(
    private store: Store<fromProduct.State>
  ) { }

  ngOnInit() {
    this.store.dispatch(new ProductListLoad());

    this.loading$ = this.store.pipe(
      select(fromProduct.selectProductListLoadingState)
    );

    this.products$ = this.store.pipe(
      select(fromProduct.selectAllProducts)
    );
  }

}
