import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  Observable ,
  of,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { DaffNavigationTree } from '@daffodil/navigation';
import {
  DaffNavigationDriver,
  DaffNavigationServiceInterface,
} from '@daffodil/navigation/driver';
import { DaffTestingNavigationService } from '@daffodil/navigation/driver/testing';
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
  let testScheduler: TestScheduler;

  let navigationTreeFactory: DaffNavigationTreeFactory;
  let navigationId;

  beforeEach(() => {
    navigationId = 'navigation id';

    TestBed.configureTestingModule({
      providers: [
        DaffNavigationEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffNavigationDriver,
          useValue: new DaffTestingNavigationService(new DaffNavigationTreeFactory()),
        },
      ],
    });

    effects = TestBed.inject(DaffNavigationEffects);
    navigationTreeFactory = TestBed.inject(DaffNavigationTreeFactory);

    daffNavigationDriver = TestBed.inject(DaffNavigationDriver);

    mockNavigation = navigationTreeFactory.create();

    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when NavigationLoadAction is triggered', () => {

    let expected;
    const navigationLoadAction = new DaffNavigationLoad(navigationId);

    describe('and the call to NavigationService is successful', () => {

      it('should dispatch a NavigationLoadFailure action', () => {
        testScheduler.run((helpers) => {
          const { expectObservable, hot, cold } = helpers;

          spyOn(daffNavigationDriver, 'get').and.returnValue(of(mockNavigation));
          const navigationLoadSuccessAction = new DaffNavigationLoadSuccess(mockNavigation);

          actions$ = hot('--a', { a: navigationLoadAction });

          expectObservable(effects.loadNavigation$(100, testScheduler )).toBe('--b', { b: navigationLoadSuccessAction });
        });
      });
    });

    describe('and the call to NavigationService fails', () => {
      it('should dispatch a NavigationLoadFailure action', () => {
        testScheduler.run((helpers) => {
          const { expectObservable, hot, cold } = helpers;

          const error = { code: 'code', recoverable: false, message: 'error message' };
          const response = cold<any>('#', {}, error);
          spyOn(daffNavigationDriver, 'get').and.returnValue(response);
          const navigationLoadFailureAction = new DaffNavigationLoadFailure(error);

          actions$ = hot('--a', { a: navigationLoadAction });

          expectObservable(effects.loadNavigation$(100, testScheduler )).toBe('--b', { b: navigationLoadFailureAction });
        });
      });

    });

    describe('deduplicating requests', () => {
      it('should prevent duplicate requests for the same navigation item within a given time window', () => {
        testScheduler.run((helpers) => {
          const { expectObservable, hot, cold } = helpers;

          spyOn(daffNavigationDriver, 'get').and.returnValue(of(mockNavigation));
          const navigationLoadSuccessAction = new DaffNavigationLoadSuccess(mockNavigation);

          const someOtherNavigationLoad = new DaffNavigationLoad('RANDOM_SECOND_TREE');

          actions$ = hot('--abaaba', { a: navigationLoadAction, b: someOtherNavigationLoad });

          expectObservable(effects.loadNavigation$(100, testScheduler )).toBe('--bc', { b: navigationLoadSuccessAction, c: navigationLoadSuccessAction });
        });
      });
    });
  });
});
