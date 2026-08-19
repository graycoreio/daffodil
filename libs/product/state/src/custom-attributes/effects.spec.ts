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
  DaffProductCustomAttributesList,
  DaffProductCustomAttributesListSuccess,
  DaffProductCustomAttributesListFailure,
} from './actions';
import { DaffProductCustomAttributesEffects } from './effects';

describe('@daffodil/product/state | DaffProductCustomAttributesEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffProductCustomAttributesEffects;

  let customAttributeFactory: DaffProductCustomAttributeFactory;
  let mockCustomAttributes: DaffProductCustomAttribute[];

  let daffDriver: DaffProductCustomAttributeServiceInterface;
  let driverListSpy: jasmine.Spy<DaffProductCustomAttributeServiceInterface['list']>;

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

    driverListSpy = spyOn(daffDriver, 'list');
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when DaffList is triggered', () => {
    let expected;
    let listAction: DaffProductCustomAttributesList;

    beforeEach(() => {
      listAction = new DaffProductCustomAttributesList();
    });

    describe('and the call to the driver is successful', () => {
      beforeEach(() => {
        driverListSpy.and.returnValue(of(mockCustomAttributes));
        const listSuccessAction = new DaffProductCustomAttributesListSuccess(mockCustomAttributes);
        actions$ = hot('--a', { a: listAction });
        expected = cold('--b', { b: listSuccessAction });
      });

      it('should dispatch a DaffProductCustomAttributesListSuccess action', () => {
        expect(effects.list$).toBeObservable(expected);
      });
    });

    describe('and the call to the driver fails', () => {
      beforeEach(() => {
        const error = new DaffProductInvalidAPIResponseError('Failed to list product custom attributes');
        const response = cold('#', {}, error);
        driverListSpy.and.returnValue(response);
        const listFailureAction = new DaffProductCustomAttributesListFailure(daffTransformErrorToStateError(error));
        actions$ = hot('--a', { a: listAction });
        expected = cold('--b', { b: listFailureAction });
      });

      it('should dispatch a DaffProductCustomAttributesListFailure action', () => {
        expect(effects.list$).toBeObservable(expected);
      });
    });
  });
});
