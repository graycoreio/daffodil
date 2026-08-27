import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  Observable,
  of,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

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
    let navigationLoadAction: DaffNavigationLoad;

    beforeEach(() => {
      navigationLoadAction = new DaffNavigationLoad();
    });

    describe('and the call to NavigationService is successful', () => {
      it('should dispatch a NavigationLoadSuccess action', () => {
        spyOn(daffNavigationDriver, 'getTree').and.returnValue(of(mockNavigation));
        const navigationLoadSuccessAction = new DaffNavigationLoadSuccess(mockNavigation);

        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(({ hot, expectObservable }) => {
          actions$ = hot('--a', { a: navigationLoadAction });
          expectObservable(effects.loadNavigation$).toBe('--b', { b: navigationLoadSuccessAction });
        });
      });
    });

    describe('and the call to NavigationService fails', () => {
      it('should dispatch a NavigationLoadFailure action', () => {
        const error = { code: 'code', recoverable: false, message: 'error message' };
        const navigationLoadFailureAction = new DaffNavigationLoadFailure(error);

        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(({ hot, cold, expectObservable }) => {
          const response = cold<any>('#', {}, error);
          spyOn(daffNavigationDriver, 'getTree').and.returnValue(response);
          actions$ = hot('--a', { a: navigationLoadAction });
          expectObservable(effects.loadNavigation$).toBe('--b', { b: navigationLoadFailureAction });
        });
      });
    });
  });

  describe('when NavigationLoadAction is triggered with a payload', () => {
    let navigationLoadAction: DaffNavigationLoad;

    beforeEach(() => {
      navigationLoadAction = new DaffNavigationLoad(navigationId);
    });

    describe('and the call to NavigationService is successful', () => {
      it('should dispatch a NavigationLoadSuccess action', () => {
        spyOn(daffNavigationDriver, 'get').and.returnValue(of(mockNavigation));
        const navigationLoadSuccessAction = new DaffNavigationLoadSuccess(mockNavigation);

        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(({ hot, expectObservable }) => {
          actions$ = hot('--a', { a: navigationLoadAction });
          expectObservable(effects.loadNavigation$).toBe('--b', { b: navigationLoadSuccessAction });
        });
      });
    });

    describe('and the call to NavigationService fails', () => {
      it('should dispatch a NavigationLoadFailure action', () => {
        const error = { code: 'code', recoverable: false, message: 'error message' };
        const navigationLoadFailureAction = new DaffNavigationLoadFailure(error);

        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(({ hot, cold, expectObservable }) => {
          const response = cold<any>('#', {}, error);
          spyOn(daffNavigationDriver, 'get').and.returnValue(response);
          actions$ = hot('--a', { a: navigationLoadAction });
          expectObservable(effects.loadNavigation$).toBe('--b', { b: navigationLoadFailureAction });
        });
      });
    });
  });
});
