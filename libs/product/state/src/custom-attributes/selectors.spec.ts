import { TestBed } from '@angular/core/testing';
import {
  Store,
  select,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffProductCustomAttribute } from '@daffodil/product';
import { DaffProductCustomAttributeFactory } from '@daffodil/product/testing';

import { DaffProductCustomAttributesListSuccess } from './actions';
import { getDaffProductCustomAttributesSelectors } from './selectors';
import {
  daffProductReducers,
  DaffProductStateRootSlice,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
} from '../reducers/public_api';

describe('@daffodil/product/state | getDaffProductCustomAttributesSelectors', () => {
  let store: Store<DaffProductStateRootSlice>;
  let customAttributeFactory: DaffProductCustomAttributeFactory;

  let mockCustomAttribute: DaffProductCustomAttribute;

  const {
    selectProductCustomAttributes,
    selectProductCustomAttributeEntities,
  } = getDaffProductCustomAttributesSelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffProductReducers),
        }),
      ],
    });

    store = TestBed.inject(Store);
    customAttributeFactory = TestBed.inject(DaffProductCustomAttributeFactory);

    mockCustomAttribute = customAttributeFactory.create();
  });

  describe('selectProductCustomAttributes', () => {
    describe('before the custom attributes are loaded', () => {
      it('should return an empty array', () => {
        const selector = store.pipe(select(selectProductCustomAttributes));
        const expected = cold('a', { a: []});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('after the custom attributes are loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffProductCustomAttributesListSuccess([mockCustomAttribute]));
      });

      it('should select the custom attributes', () => {
        const selector = store.pipe(select(selectProductCustomAttributes));
        const expected = cold('a', { a: [jasmine.objectContaining<DaffProductCustomAttribute>(mockCustomAttribute)]});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectProductCustomAttributeEntities', () => {
    describe('before the custom attributes are loaded', () => {
      it('should return an empty dictionary', () => {
        const selector = store.pipe(select(selectProductCustomAttributeEntities));
        const expected = cold('a', { a: {}});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('after the custom attributes are loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffProductCustomAttributesListSuccess([mockCustomAttribute]));
      });

      it('should select the custom attribute entities', () => {
        const selector = store.pipe(select(selectProductCustomAttributeEntities));
        const expected = cold('a', { a: jasmine.objectContaining({ [mockCustomAttribute.id]: jasmine.objectContaining<DaffProductCustomAttribute>(mockCustomAttribute) }) });

        expect(selector).toBeObservable(expected);
      });
    });
  });
});
