import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';

import { DaffProductLoad, DaffProductUpdateQty } from '../../actions/product.actions';
import { DaffProduct } from '../../models/product';
import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
import { selectSelectedProductLoadingState, selectSelectedProduct, selectSelectedProductQty } from '../../selectors/product.selectors';

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
    private store: Store<DaffProductReducersState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new DaffProductLoad(this.selectedProductId));

    this.loading$ = this.store.pipe(select(selectSelectedProductLoadingState));

    this.product$ = this.store.pipe(select(selectSelectedProduct));

    this.qty$ = this.store.pipe(select(selectSelectedProductQty));
  }

  updateQty(payload: number) {
    this.store.dispatch(new DaffProductUpdateQty(payload));
  }
}
