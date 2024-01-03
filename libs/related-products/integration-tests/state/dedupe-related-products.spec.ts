import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import {
  StoreModule,
  Store,
} from '@ngrx/store';

import { DaffProductTestingDriverModule } from '@daffodil/product/driver/testing';
import {
  DaffProductStateModule,
  DaffProductPageLoadSuccess,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';
import { DaffRelatedProduct } from '@daffodil/related-products';
import {
  DaffRelatedProductStateModule,
  DaffRelatedProductStateRootSlice,
} from '@daffodil/related-products/state';
import { DaffRelatedProductFactory } from '@daffodil/related-products/testing';

describe('@daffodil/related-products/state | Deduping Related Products Only from Product Reducers', () => {
  let store: Store<DaffRelatedProductStateRootSlice<DaffRelatedProduct>>;
  let product: DaffRelatedProduct;
  let productFactory: DaffProductFactory;
  let relatedProductFactory: DaffRelatedProductFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot(),
        DaffProductStateModule,
        DaffRelatedProductStateModule,
        DaffProductTestingDriverModule.forRoot(),
      ],
    });

    store = TestBed.inject(Store);
    productFactory = TestBed.inject(DaffProductFactory);
    relatedProductFactory = TestBed.inject(DaffRelatedProductFactory);

    product = relatedProductFactory.create({
      related: productFactory.createMany(3),
    });
  });

  describe('when the product page is loaded with related products', () => {
    beforeEach(() => {
      store.dispatch(new DaffProductPageLoadSuccess({
        id: product.id,
        products: [product, ...product.related],
      }));
    });

    it('should not store nested related products in product state', done => {
      store.subscribe((state) => {
        expect(state.daffProduct.products.entities[product.id].related).toBeFalsy();
        done();
      });
    });

    it('should store nested related product IDs in related products state', done => {
      store.subscribe((state) => {
        expect(state.daffRelatedProducts.relatedProducts.relatedProductIds).toEqual(jasmine.arrayContaining(product.related.map(({ id }) => id)));
        done();
      });
    });
  });
});
