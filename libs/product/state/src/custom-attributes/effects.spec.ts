import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  hot,
  cold,
} from 'jasmine-marbles';
import {
  Observable,
  of,
} from 'rxjs';

import { daffTransformErrorToStateError } from '@daffodil/core/state';
import { DaffProductCustomAttribute } from '@daffodil/product';
import {
  DaffProductCustomAttributeDriver,
  DaffProductCustomAttributeServiceInterface,
  DaffProductInvalidAPIResponseError,
} from '@daffodil/product/driver';
import { DaffProductTestingDriverModule } from '@daffodil/product/driver/testing';
import { DaffProductCustomAttributeFactory } from '@daffodil/product/testing';

import {
  DaffProductCustomAttributesSearch,
  DaffProductCustomAttributesSearchSuccess,
  DaffProductCustomAttributesSearchFailure,
} from './actions';
import { DaffProductCustomAttributesEffects } from './effects';

describe('@daffodil/product/state | DaffProductCustomAttributesEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffProductCustomAttributesEffects;

  let customAttributeFactory: DaffProductCustomAttributeFactory;
  let mockCustomAttributes: DaffProductCustomAttribute[];

  let daffDriver: DaffProductCustomAttributeServiceInterface;
  let driverSearchSpy: jasmine.Spy<DaffProductCustomAttributeServiceInterface['search']>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffProductTestingDriverModule.forRoot(),
      ],
      providers: [
        DaffProductCustomAttributesEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(DaffProductCustomAttributesEffects);
    daffDriver = TestBed.inject<DaffProductCustomAttributeServiceInterface>(DaffProductCustomAttributeDriver);
    customAttributeFactory = TestBed.inject(DaffProductCustomAttributeFactory);

    mockCustomAttributes = customAttributeFactory.createMany(2);

    driverSearchSpy = spyOn(daffDriver, 'search');
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when DaffProductCustomAttributesSearch is triggered', () => {
    let expected;
    let searchAction: DaffProductCustomAttributesSearch;
    let mockIds: Array<DaffProductCustomAttribute['id']>;

    beforeEach(() => {
      mockIds = mockCustomAttributes.map(({ id }) => id);
      searchAction = new DaffProductCustomAttributesSearch(mockIds);
    });

    describe('and the call to the driver is successful', () => {
      beforeEach(() => {
        driverSearchSpy.and.returnValue(of(mockCustomAttributes));
        const searchSuccessAction = new DaffProductCustomAttributesSearchSuccess(mockCustomAttributes);
        actions$ = hot('--a', { a: searchAction });
        expected = cold('--b', { b: searchSuccessAction });
      });

      it('should dispatch a DaffProductCustomAttributesSearchSuccess action', () => {
        expect(effects.search$).toBeObservable(expected);
      });

      it('should call the driver with the requested IDs', () => {
        expect(effects.search$).toBeObservable(expected);
        expect(driverSearchSpy).toHaveBeenCalledWith(mockIds);
      });
    });

    describe('and the call to the driver fails', () => {
      beforeEach(() => {
        const error = new DaffProductInvalidAPIResponseError('Failed to search product custom attributes');
        const response = cold('#', {}, error);
        driverSearchSpy.and.returnValue(response);
        const searchFailureAction = new DaffProductCustomAttributesSearchFailure(daffTransformErrorToStateError(error));
        actions$ = hot('--a', { a: searchAction });
        expected = cold('--b', { b: searchFailureAction });
      });

      it('should dispatch a DaffProductCustomAttributesSearchFailure action', () => {
        expect(effects.search$).toBeObservable(expected);
      });
    });
  });
});
