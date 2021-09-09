import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  DAFF_CONFIGURABLE_PRODUCT_STORE_FEATURE_KEY,
  daffConfigurableProductReducers,
} from '@daffodil/configurable-product/state';
import { DaffConfigurableProduct } from '@daffodil/product';
import {
  DaffProductGridLoadSuccess,
  DaffProductStateRootSlice,
  daffProductReducers,
  DaffConfigurableProductApplyAttribute,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
  DaffProductGridLoad,
} from '@daffodil/product/state';
import { DaffConfigurableProductFactory } from '@daffodil/product/testing';

import { getDaffConfigurableProductEntitiesSelectors } from './configurable-product-entities.selectors';

describe('selectConfigurableProductEntitiesState', () => {

  let store: Store<DaffProductStateRootSlice>;
  const configurableProductFactory: DaffConfigurableProductFactory = new DaffConfigurableProductFactory();
  let stubConfigurableProduct: DaffConfigurableProduct;
  const {
    selectConfigurableProductIds,
    selectConfigurableProductAppliedAttributesEntities,
    selectConfigurableProductTotal,
    selectConfigurableProductAppliedAttributes,
    selectConfigurableProductAppliedAttributesAsDictionary,
  } = getDaffConfigurableProductEntitiesSelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_CONFIGURABLE_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffConfigurableProductReducers),
          [DAFF_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffProductReducers),
        }),
      ],
    });

    stubConfigurableProduct = configurableProductFactory.create();
    store = TestBed.inject(Store);

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
      const expected = cold('a', { a: [stubConfigurableProduct.id]});

      expect(selector).toBeObservable(expected);
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
      const expected = cold('a', { a: expectedDictionary });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectConfigurableProductTotal', () => {

    it('selects the total number of configurable products', () => {
      const selector = store.pipe(select(selectConfigurableProductTotal));
      const expected = cold('a', { a: 1 });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectConfigurableProductAppliedAttributes', () => {

    it('selects the configurable product attributes of the given id', () => {
      const selector = store.pipe(select(selectConfigurableProductAppliedAttributes(stubConfigurableProduct.id)));
      const expected = cold('a', {
        a: [{
          code: stubConfigurableProduct.configurableAttributes[0].code,
          value: stubConfigurableProduct.configurableAttributes[0].values[0].value,
        }],
      });

      expect(selector).toBeObservable(expected);
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
      const expected = cold('a', {
        a: {
          [stubConfigurableProduct.configurableAttributes[0].code]: stubConfigurableProduct.configurableAttributes[0].values[0].value,
        },
      });

      expect(selector).toBeObservable(expected);
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
