import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';

import * as fromProduct from '../../reducers/index';
import { ProductLoad, UpdateQty } from '../../actions/product.actions';
import { Product } from '../../models/product';

/**
 * A component for attaching product data to an application view.
 * 
 * @Param store - a redux store of Products.
 */
@Component({
  selector: '[product-container]',
  template: '<ng-content></ng-content>',
  exportAs: 'ProductContainer'
})
export class ProductContainer implements OnInit {

  /**
   * Id of the selected product.
   */
  @Input() selectedProductId: string;

  /**
   * Tracks the loading status of products in the redux store.
   */
  loading$: Observable<boolean>;
  /**
   * An Observable of the selected Product.
   */
  product$: Observable<Product>;
  /**
   * An Observable of the qty of the selected Product.
   */
  qty$: Observable<number>;

  constructor(
    private store: Store<fromProduct.State>
  ) { }

  /**
   * An Angular lifecycle method.
   */
  ngOnInit() {
    this.store.dispatch(new ProductLoad(this.selectedProductId));

    this.loading$ = this.store.pipe(select(fromProduct.selectSelectedProductLoadingState));

    this.product$ = this.store.pipe(select(fromProduct.selectSelectedProduct));

    this.qty$ = this.store.pipe(select(fromProduct.selectSelectedProductQty));
  }

  /**
   * Update the qty of the selected Product.
   * 
   * @param payload selected qty of the selected Product.
   */
  updateQty(payload: number) {
    this.store.dispatch(new UpdateQty(payload));
  }
}
