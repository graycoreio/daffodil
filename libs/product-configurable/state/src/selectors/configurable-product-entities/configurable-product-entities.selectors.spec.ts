import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffProductGridLoadSuccess,
  DaffProductStateRootSlice,
  daffProductReducers,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
  DaffProductGridLoad,
} from '@daffodil/product/state';
import { DaffConfigurableProduct } from '@daffodil/product-configurable';
import {
  DAFF_CONFIGURABLE_PRODUCT_STORE_FEATURE_KEY,
  daffConfigurableProductReducers,
  DaffConfigurableProductApplyAttribute,
} from '@daffodil/product-configurable/state';
import { DaffConfigurableProductFactory } from '@daffodil/product-configurable/testing';

import { getDaffConfigurableProductEntitiesSelectors } from './configurable-product-entities.selectors';

describe('selectConfigurableProductEntitiesState', () => {

  let store: Store<DaffProductStateRootSlice>;
  let configurableProductFactory: DaffConfigurableProductFactory;
  let stubConfigurableProduct: DaffConfigurableProduct;
  let scheduler: TestScheduler;
  const {
    selectConfigurableProductIds,
    selectConfigurableProductAppliedAttributesEntities,
    selectConfigurableProductTotal,
    selectConfigurableProductAppliedAttributes,
    selectConfigurableProductAppliedAttributesAsDictionary,
  } = getDaffConfigurableProductEntitiesSelectors();

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_CONFIGURABLE_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffConfigurableProductReducers),
          [DAFF_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffProductReducers),
        }),
      ],
    });

    configurableProductFactory = TestBed.inject(DaffConfigurableProductFactory);
    store = TestBed.inject(Store);

    stubConfigurableProduct = configurableProductFactory.create();

    store.dispatch(new DaffProductGridLoadSuccess(new Array(stubConfigurableProduct)));
    store.dispatch(new DaffConfigurableProductApplyAttribute(
      stubConfigurableProduct.id,
      stubConfigurableProduct.configurableAttributes[0].code,
      stubConfigurableProduct.configurableAttributes[0].values[0].value,
    ));
  });

  describe('selectConfigurableProductIds', () => {

    it('selects product ids', () => {
      const selector = store.pipe(select(selectConfigurableProductIds));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: [stubConfigurableProduct.id]});
      });
    });
  });

  describe('selectConfigurableProductAppliedAttributesEntities', () => {

    it('selects configurable product attributes as a dictionary object', () => {
      const expectedDictionary = {
        [stubConfigurableProduct.id]: {
          id: stubConfigurableProduct.id,
          attributes: [
            {
              code: stubConfigurableProduct.configurableAttributes[0].code,
              value: stubConfigurableProduct.configurableAttributes[0].values[0].value,
            },
          ],
        },
      };

      const selector = store.pipe(select(selectConfigurableProductAppliedAttributesEntities));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: expectedDictionary });
      });
    });
  });

  describe('selectConfigurableProductTotal', () => {

    it('selects the total number of configurable products', () => {
      const selector = store.pipe(select(selectConfigurableProductTotal));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: 1 });
      });
    });
  });

  describe('selectConfigurableProductAppliedAttributes', () => {

    it('selects the configurable product attributes of the given id', () => {
      const selector = store.pipe(select(selectConfigurableProductAppliedAttributes(stubConfigurableProduct.id)));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', {
        a: [{
          code: stubConfigurableProduct.configurableAttributes[0].code,
          value: stubConfigurableProduct.configurableAttributes[0].values[0].value,
        }],
      });
      });
    });

    it('should not emit when an unrelated piece of state changes', () => {
      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectConfigurableProductAppliedAttributes(stubConfigurableProduct.id)));

      selector.subscribe(spy);

      store.dispatch(new DaffProductGridLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('selectConfigurableProductAppliedAttributesAsDictionary', () => {

    it('selects the configurable product attributes of the given id as a dictionary', () => {
      const selector = store.pipe(select(selectConfigurableProductAppliedAttributesAsDictionary(stubConfigurableProduct.id)));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', {
        a: {
          [stubConfigurableProduct.configurableAttributes[0].code]: stubConfigurableProduct.configurableAttributes[0].values[0].value,
        },
      });
      });
    });

    it('should not emit when an unrelated piece of state changes', () => {
      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectConfigurableProductAppliedAttributesAsDictionary(stubConfigurableProduct.id)));

      selector.subscribe(spy);

      store.dispatch(new DaffProductGridLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
