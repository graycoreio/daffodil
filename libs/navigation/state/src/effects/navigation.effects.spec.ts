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

import { DaffNavigationTree } from '@daffodil/navigation';
import {
  DaffNavigationDriver,
  DaffNavigationServiceInterface,
} from '@daffodil/navigation/driver';
import { DaffNavigationTestingDriverModule } from '@daffodil/navigation/driver/testing';
import {
  DaffNavigationLoad,
  DaffNavigationLoadSuccess,
  DaffNavigationLoadFailure,
} from '@daffodil/navigation/state';
import { DaffNavigationTreeFactory } from '@daffodil/navigation/testing';

import { DaffNavigationEffects } from './navigation.effects';

describe('DaffNavigationEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffNavigationEffects<DaffNavigationTree>;
  let mockNavigation: DaffNavigationTree;
  let daffNavigationDriver: DaffNavigationServiceInterface<DaffNavigationTree>;

  let navigationTreeFactory: DaffNavigationTreeFactory;
  let navigationId: DaffNavigationTree['id'];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffNavigationTestingDriverModule.forRoot(),
      ],
      providers: [
        DaffNavigationEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(DaffNavigationEffects);
    navigationTreeFactory = TestBed.inject(DaffNavigationTreeFactory);

    daffNavigationDriver = TestBed.inject(DaffNavigationDriver);

    mockNavigation = navigationTreeFactory.create();
    navigationId = mockNavigation.id;
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when NavigationLoadAction is triggered without a payload', () => {
    let expected;
    let navigationLoadAction: DaffNavigationLoad;

    beforeEach(() => {
      navigationLoadAction = new DaffNavigationLoad();
    });

    describe('and the call to NavigationService is successful', () => {
      beforeEach(() => {
        spyOn(daffNavigationDriver, 'getTree').and.returnValue(of(mockNavigation));
        const navigationLoadSuccessAction = new DaffNavigationLoadSuccess(mockNavigation);
        actions$ = hot('--a', { a: navigationLoadAction });
        expected = cold('--b', { b: navigationLoadSuccessAction });
      });

      it('should dispatch a NavigationLoadSuccess action', () => {
        expect(effects.loadNavigation$).toBeObservable(expected);
      });
    });

    describe('and the call to NavigationService fails', () => {
      beforeEach(() => {
        const error = { code: 'code', recoverable: false, message: 'error message' };
        const response = cold('#', {}, error);
        spyOn(daffNavigationDriver, 'getTree').and.returnValue(response);
        const navigationLoadFailureAction = new DaffNavigationLoadFailure(error);
        actions$ = hot('--a', { a: navigationLoadAction });
        expected = cold('--b', { b: navigationLoadFailureAction });
      });

      it('should dispatch a NavigationLoadFailure action', () => {
        expect(effects.loadNavigation$).toBeObservable(expected);
      });
    });
  });

  describe('when NavigationLoadAction is triggered with a payload', () => {
    let expected;
    let navigationLoadAction: DaffNavigationLoad;

    beforeEach(() => {
      navigationLoadAction = new DaffNavigationLoad(navigationId);
    });

    describe('and the call to NavigationService is successful', () => {
      beforeEach(() => {
        spyOn(daffNavigationDriver, 'get').and.returnValue(of(mockNavigation));
        const navigationLoadSuccessAction = new DaffNavigationLoadSuccess(mockNavigation);
        actions$ = hot('--a', { a: navigationLoadAction });
        expected = cold('--b', { b: navigationLoadSuccessAction });
      });

      it('should dispatch a NavigationLoadSuccess action', () => {
        expect(effects.loadNavigation$).toBeObservable(expected);
      });
    });

    describe('and the call to NavigationService fails', () => {
      beforeEach(() => {
        const error = { code: 'code', recoverable: false, message: 'error message' };
        const response = cold('#', {}, error);
        spyOn(daffNavigationDriver, 'get').and.returnValue(response);
        const navigationLoadFailureAction = new DaffNavigationLoadFailure(error);
        actions$ = hot('--a', { a: navigationLoadAction });
        expected = cold('--b', { b: navigationLoadFailureAction });
      });

      it('should dispatch a NavigationLoadFailure action', () => {
        expect(effects.loadNavigation$).toBeObservable(expected);
      });
    });
  });
});
