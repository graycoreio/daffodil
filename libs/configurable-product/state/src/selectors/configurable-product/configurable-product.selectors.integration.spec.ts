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
  DaffProductLoadSuccess,
  daffProductReducers,
  DaffProductStateRootSlice,
  DaffConfigurableProductApplyAttribute,
  getDaffConfigurableProductEntitiesSelectors,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
} from '@daffodil/product/state';
import { DaffConfigurableProductFactory } from '@daffodil/product/testing';

import { getDaffConfigurableProductSelectors } from './configurable-product.selectors';

describe('Configurable Product Selectors | integration tests', () => {

  let store: Store<DaffProductStateRootSlice>;
  const configurableProductFactory: DaffConfigurableProductFactory = new DaffConfigurableProductFactory();
  let stubConfigurableProduct: DaffConfigurableProduct;
  const {
    selectSelectableConfigurableProductAttributes,
  } = getDaffConfigurableProductSelectors();

  const {
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
  });

  describe('when one attribute (material) is chosen', () => {

    beforeEach(() => {
      store.dispatch(new DaffProductLoadSuccess({
        id: stubConfigurableProduct.id,
        products: [stubConfigurableProduct],
      }));
      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        'material',
        '2',
      ));
    });

    it(`should include all attribute values for the selected attribute code;
				should include only attributes values for the remaining attribute codes that match variants having the selected attribute value`, () => {
      const selector = store.pipe(select(selectSelectableConfigurableProductAttributes(stubConfigurableProduct.id)));
      const expected = cold('a', {
        a: {
          color: ['0', '1'],
          size: ['1', '0'],
          material: ['0', '2', '1'],
        },
      });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('when more than one attribute (color and size) is chosen', () => {

    beforeEach(() => {
      store.dispatch(new DaffProductLoadSuccess({
        id: stubConfigurableProduct.id,
        products: [stubConfigurableProduct],
      }));
      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        'color',
        '0',
      ));
      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        'size',
        '1',
      ));
    });

    it(`should include all attribute values for the attribute code that was selected first;
				should include only attribute values for the second selected attribute code that match variants having the first selected attribute value;
				should include only attribute values for the remaining attribute codes that match variants having both the first and second selected attribute values`, () => {
      const selector = store.pipe(select(selectSelectableConfigurableProductAttributes(stubConfigurableProduct.id)));
      const expected = cold('a', {
        a: {
          color: ['0', '1', '2'],
          size: ['0', '1', '2'],
          material: ['0', '2'],
        },
      });

      expect(selector).toBeObservable(expected);
    });

    describe('and a different first selection (color) is chosen', () => {

      beforeEach(() => {
        store.dispatch(new DaffConfigurableProductApplyAttribute(
          stubConfigurableProduct.id,
          'color',
          '1',
        ));
      });

      it('should clear the second selection (size)', () => {
        const selector = store.pipe(select(selectConfigurableProductAppliedAttributesAsDictionary(stubConfigurableProduct.id)));
        const expected = cold('a', {
          a: {
            color: '1',
          },
        });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('and a different second selection (size) is chosen', () => {

      beforeEach(() => {
        store.dispatch(new DaffConfigurableProductApplyAttribute(
          stubConfigurableProduct.id,
          'size',
          '0',
        ));
      });

      it('should not clear the first selection (color)', () => {
        const selector = store.pipe(select(selectConfigurableProductAppliedAttributesAsDictionary(stubConfigurableProduct.id)));
        const expected = cold('a', {
          a: {
            color: '0',
            size: '0',
          },
        });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  it('returns a dictionary of attribute values that are still selectable', () => {
    store.dispatch(new DaffProductLoadSuccess({
      id: stubConfigurableProduct.id,
      products: [stubConfigurableProduct],
    }));
    const selector = store.pipe(select(selectSelectableConfigurableProductAttributes(stubConfigurableProduct.id)));
    const expected = cold('a', {
      a: {
        color: ['0', '1', '2'],
        size: ['0', '1', '2'],
        material: ['0', '2', '1'],
      },
    });

    expect(selector).toBeObservable(expected);
  });
});
