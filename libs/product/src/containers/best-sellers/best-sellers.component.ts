import { Component, OnInit } from '@angular/core';
import { Observable ,  combineLatest } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as fromProduct from '../../reducers/index';
import { BestSellersLoad } from '../../actions/best-sellers.actions';
import { Product } from '../../models/product';

/**
 * A component for attaching best selling products data to an application view.
 * 
 * @param store - A redux store of Products.
 */
@Component({
  selector: '[best-sellers-container]',
  template: '<ng-content></ng-content>',
  exportAs: 'BestSellersContainer'
})
export class BestSellersContainer implements OnInit {

  /**
   * An Observable that tracks the loading status of best selling products in the redux store.
   */
  loading$: Observable<boolean>;
  /**
   * An array of best selling Products.
   */
  bestSellers: Product[];

  constructor(
    private store: Store<fromProduct.State>
  ) { }

  /**
   * An Angular lifecycle method.
   */
  ngOnInit() {
    this.store.dispatch(new BestSellersLoad());

    this.loading$ = this.store.pipe(select(fromProduct.selectBestSellersLoadingState));

    combineLatest(
      this.getProducts(), this.getBestSellersIds()
    ).subscribe(([products, bestSellersIds]) => {
      this.bestSellers = [];

      bestSellersIds.forEach(id => {
        products.forEach(product => {
          if (product.id === id) {
            this.bestSellers.push(product);
          }
        });
      });
    });
  }

  private getProducts(): Observable<Product[]> {
    return this.store.pipe(select(fromProduct.selectAllProducts));
  }

  private getBestSellersIds(): Observable<string[]> {
    return this.store.pipe(select(fromProduct.selectBestSellersIdsState));
  }
}
