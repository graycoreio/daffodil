import { Component, OnInit } from '@angular/core';
import { Observable ,  combineLatest } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { DaffBestSellersLoad } from '../../actions/best-sellers.actions';
import { DaffProduct } from '../../models/product';
import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
import { selectAllProducts } from '../../selectors/product-entities.selectors';
import { selectBestSellersLoadingState, selectBestSellersIdsState } from '../../selectors/best-sellers.selectors';

@Component({
  selector: '[best-sellers-container]',
  template: '<ng-content></ng-content>',
  exportAs: 'BestSellersContainer'
})
export class DaffBestSellersContainer implements OnInit {

  loading$: Observable<boolean>;
  bestSellers: DaffProduct[];

  constructor(
    private store: Store<DaffProductReducersState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new DaffBestSellersLoad());

    this.loading$ = this.store.pipe(select(selectBestSellersLoadingState));

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

  private getProducts(): Observable<DaffProduct[]> {
    return this.store.pipe(select(selectAllProducts));
  }

  private getBestSellersIds(): Observable<string[]> {
    return this.store.pipe(select(selectBestSellersIdsState));
  }
}
