import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { hot, cold } from 'jasmine-marbles';

import { MemberOnlyGuard } from './member-only.guard';
import { DaffAuthGuardCheckCompletion, DaffAuthGuardCheck } from '../actions/auth.actions';
import { DaffAuthFacade } from '../facades/auth.facade';

describe('Demo | Auth | MemberOnlyGuard', () => {
  let guard: MemberOnlyGuard;
  let actions$: Actions;

  let mockFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockActions(() => actions$),
        {
          provide: DaffAuthFacade,
          useValue: jasmine.createSpyObj('DaffAuthFacade', ['dispatch'])
        }
      ]
    });

    guard = TestBed.get(MemberOnlyGuard);
    mockFacade = TestBed.get(DaffAuthFacade);
  });

  describe('isAuthenticated | checking if the user is authenticated', () => {
    let expected;
    let result;

    beforeEach(() => {
      result = guard.isAuthenticated();
    });

    describe('when the user is not authenticated', () => {
      const mockAuthGuardCheckCompletionAction = new DaffAuthGuardCheckCompletion(false);

      beforeEach(() => {
        actions$ = hot('--a', { a: mockAuthGuardCheckCompletionAction });
        expected = cold('--b', { b: false });
        result = guard.isAuthenticated();
      });

      it('should return false', () => {
        expect(result).toBeObservable(expected);
      });
    });

    describe('when the user is authenticated', () => {
      const mockAuthGuardCheckCompletionAction = new DaffAuthGuardCheckCompletion(true);

      beforeEach(() => {
        actions$ = hot('--a', { a: mockAuthGuardCheckCompletionAction });
        expected = cold('--b', { b: true });
        result = guard.isAuthenticated();
      });

      it('should return true', () => {
        expect(result).toBeObservable(expected);
      });
    });
  });

  describe('canActivate | checking if the route can be activated', () => {
    let result;

    const mockAuthCheckAction = new DaffAuthGuardCheck();

    beforeEach(() => {
      result = guard.canActivate();
    });

    it('should initiate an auth check', () => {
      expect(mockFacade.dispatch).toHaveBeenCalledWith(mockAuthCheckAction);
    });
  });
});
