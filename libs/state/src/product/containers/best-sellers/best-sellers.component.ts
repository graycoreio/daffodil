import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';

import { Product } from '@daffodil/core';

import * as fromProduct from '../../reducers/index';
import { BestSellersLoad } from '../../actions/best-sellers.actions';
import { combineLatest } from 'rxjs';

@Component({
  selector: '[best-sellers-container]',
  template: '<ng-content></ng-content>',
  exportAs: 'BestSellersContainer'
})
export class BestSellersContainer implements OnInit {

  loading$: Observable<boolean>;
  bestSellers: Product[];

  constructor(
    private store: Store<fromProduct.State>
  ) { }

  ngOnInit() {
    this.store.dispatch(new BestSellersLoad());

    this.loading$ = this.store.pipe(
      select(fromProduct.selectBestSellersLoadingState)
    );

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
    return this.store.pipe(
      select(fromProduct.selectAllProducts)
    );
  }

  private getBestSellersIds(): Observable<string[]> {
    return this.store.pipe(
      select(fromProduct.selectBestSellersIdsState)
    );
  }
}
