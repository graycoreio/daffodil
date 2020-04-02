import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';

import { DaffProductGridLoad } from '../../actions/product-grid.actions';
import { DaffProduct } from '../../models/product';
import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
import { selectProductGridLoadingState } from '../../selectors/product-grid.selectors';
import { selectAllProducts } from '../../selectors/product-entities.selectors';

@Component({
  selector: '[product-grid-container]',
  template: '<ng-content></ng-content>',
  exportAs: 'ProductGridContainer'
})
export class DaffProductGridContainer implements OnInit {

  loading$: Observable<boolean>;
  products$: Observable<DaffProduct[]>;

  constructor(
    private store: Store<DaffProductReducersState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new DaffProductGridLoad());

    this.loading$ = this.store.pipe(select(selectProductGridLoadingState));

    this.products$ = this.store.pipe(select(selectAllProducts));
  }
}
