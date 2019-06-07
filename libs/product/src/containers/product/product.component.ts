import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';

import * as fromProduct from '../../reducers/index';
import { DaffProductLoad, DaffProductUpdateQty } from '../../actions/product.actions';
import { DaffProduct } from '../../models/product';

@Component({
  selector: '[product-container]',
  template: '<ng-content></ng-content>',
  exportAs: 'ProductContainer'
})
export class DaffProductContainer implements OnInit {

  @Input() selectedProductId: string;

  loading$: Observable<boolean>;
  product$: Observable<DaffProduct>;
  qty$: Observable<number>;

  constructor(
    private store: Store<fromProduct.State>
  ) { }

  ngOnInit() {
    this.store.dispatch(new DaffProductLoad(this.selectedProductId));

    this.loading$ = this.store.pipe(select(fromProduct.selectSelectedProductLoadingState));

    this.product$ = this.store.pipe(select(fromProduct.selectSelectedProduct));

    this.qty$ = this.store.pipe(select(fromProduct.selectSelectedProductQty));
  }

  updateQty(payload: number) {
    this.store.dispatch(new DaffProductUpdateQty(payload));
  }
}
