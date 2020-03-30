import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable ,  of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { DaffNavigationTreeFactory, DaffTestingNavigationService } from '@daffodil/navigation/testing';
import { DaffNavigationEffects } from './navigation.effects';
import { DaffNavigationLoad, DaffNavigationLoadSuccess, DaffNavigationLoadFailure } from '../actions/navigation.actions';
import { DaffNavigationServiceInterface } from '../drivers/interfaces/navigation-service.interface';
import { DaffNavigationDriver } from '../drivers/injection-tokens/navigation-driver.token';
import { DaffSpecificNavigationTree } from '../models/specific-navigation-tree';

describe('DaffNavigationEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffNavigationEffects<DaffSpecificNavigationTree>;
  let mockNavigation: DaffSpecificNavigationTree;
  let daffNavigationDriver: DaffNavigationServiceInterface<DaffSpecificNavigationTree>;

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
          useValue: new DaffTestingNavigationService(new DaffNavigationTreeFactory())
        },
      ]
    });

    effects = TestBed.get(DaffNavigationEffects);
    navigationTreeFactory = TestBed.get(DaffNavigationTreeFactory);

    daffNavigationDriver = TestBed.get(DaffNavigationDriver);

    mockNavigation = navigationTreeFactory.create();
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when NavigationLoadAction is triggered', () => {

    let expected;
    const navigationLoadAction = new DaffNavigationLoad(navigationId);
    
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
        const error = 'Failed to load the navigation tree';
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
