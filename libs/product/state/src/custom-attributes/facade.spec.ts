import { TestBed } from '@angular/core/testing';
import {
  combineReducers,
  Store,
  StoreModule,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffProductCustomAttribute } from '@daffodil/product';
import { DaffProductCustomAttributeFactory } from '@daffodil/product/testing';

import { DaffProductCustomAttributesListSuccess } from './actions';
import { DaffProductCustomAttributesFacade } from './facade';
import {
  daffProductReducers,
  DaffProductStateRootSlice,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
} from '../reducers/public_api';

describe('@daffodil/product/state | DaffProductCustomAttributesFacade', () => {
  let store: Store<DaffProductStateRootSlice>;
  let facade: DaffProductCustomAttributesFacade;
  let customAttributeFactory: DaffProductCustomAttributeFactory;

  let mockCustomAttribute: DaffProductCustomAttribute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffProductReducers),
        }),
      ],
      providers: [
        DaffProductCustomAttributesFacade,
      ],
    });

    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffProductCustomAttributesFacade);
    customAttributeFactory = TestBed.inject(DaffProductCustomAttributeFactory);

    mockCustomAttribute = customAttributeFactory.create();

    store.dispatch(new DaffProductCustomAttributesListSuccess([mockCustomAttribute]));
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should be able to dispatch an action to the store', () => {
    spyOn(store, 'dispatch');
    const action = { type: 'SOME_TYPE' };

    facade.dispatch(action);
    expect(<any>store.dispatch).toHaveBeenCalledWith(action);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  describe('customAttributes$', () => {
    it('should contain the loaded custom attribute', () => {
      const expected = cold('a', { a: jasmine.arrayContaining([jasmine.objectContaining<DaffProductCustomAttribute>(mockCustomAttribute)]) });
      expect(facade.customAttributes$).toBeObservable(expected);
    });
  });

  describe('entities$', () => {
    it('should contain the loaded custom attribute keyed by id', () => {
      const expected = cold('a', { a: jasmine.objectContaining({ [mockCustomAttribute.id]: jasmine.objectContaining<DaffProductCustomAttribute>(mockCustomAttribute) }) });
      expect(facade.entities$).toBeObservable(expected);
    });
  });
});
