import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Store, select } from '@ngrx/store';

import { Product } from '../../model/product';
import * as fromProduct from '../../reducers';
import { ProductLoad } from '../../actions/product.actions';

@Component({
  selector: '[product-container]',
  template: '<ng-content></ng-content>',
  exportAs: 'ProductContainer'
})
export class ProductContainer implements OnInit {

  @Input() selectedProductId: string;

  loading$: Observable<boolean>;
  product$: Observable<Product>;

  constructor(
    private store: Store<fromProduct.State>
  ) { }

  ngOnInit() {    
    this.store.dispatch(new ProductLoad(this.selectedProductId));

    this.loading$ = this.store.pipe(
      select(fromProduct.selectSelectedProductLoadingState)
    );

    this.product$ = this.store.pipe(
      select(fromProduct.selectSelectedProduct)
    );
  }
}
