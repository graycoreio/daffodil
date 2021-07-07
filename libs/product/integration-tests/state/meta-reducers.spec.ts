import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import {
  MetaReducer,
  Store,
  StoreModule,
} from '@ngrx/store';
import { combineLatest } from 'rxjs';

import { DaffProduct } from '@daffodil/product';
import { DaffProductTestingDriverModule } from '@daffodil/product/driver/testing';
import {
  DaffProductActions,
  DaffProductActionTypes,
  DaffProductFacade,
  DaffProductPageActions,
  DaffProductPageActionTypes,
  DaffProductPageLoadSuccess,
  daffProductProvideMetaReducers,
  DaffProductReducersState,
  DaffProductStateModule,
  DaffProductStateRootSlice,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

describe('@daffodil/product | Injecting a Meta-Reducer that modifies action payloads', () => {
  let metaReducer: MetaReducer<DaffProductReducersState, DaffProductPageActions | DaffProductActions>;
  let productFactory: DaffProductFactory;
  let mockProducts: DaffProduct[];
  let store: Store<DaffProductStateRootSlice>;
  let facade: DaffProductFacade;

  beforeEach(() => {
    metaReducer = (reducer) => (state, action) => {
      switch (action.type) {
        case DaffProductPageActionTypes.ProductPageLoadSuccessAction:
        case DaffProductActionTypes.ProductLoadSuccessAction:
          return reducer(
            state,
            new DaffProductPageLoadSuccess({
              ...action.payload,
              products: action.payload.products.map(product => ({
                ...product,
                name: `${product.name} meta-reducer was here`,
              })),
            }),
          );

        default:
          return reducer(state, action);
      }
    };

    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot(),
        DaffProductTestingDriverModule.forRoot(),
        DaffProductStateModule,
      ],
      providers: [
        ...daffProductProvideMetaReducers(metaReducer),
      ],
    });

    productFactory = TestBed.inject(DaffProductFactory);
    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffProductFacade);

    mockProducts = productFactory.createMany(3);

    store.dispatch(new DaffProductPageLoadSuccess({
      id: mockProducts[0].id,
      products: mockProducts,
    }));
  });

  it('should append a message to the end of the names of all the products in the payload', done => {
    combineLatest(mockProducts.map(product => facade.getProduct(product.id))).subscribe(products => {
      products.forEach(product => {
        expect(product.name).toContain('meta-reducer was here');
      });
      done();
    });
  });
});
