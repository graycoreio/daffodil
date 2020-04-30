import { TestBed } from '@angular/core/testing';
import { hot, cold } from 'jasmine-marbles';

import { GuestOnlyGuard } from './guest-only.guard';
import { MemberOnlyGuard } from './member-only.guard';
import { DaffAuthFacade } from '../facades/auth.facade';
import { DaffAuthGuardCheck } from '../actions/auth.actions';

describe('Demo | Auth | GuestOnlyGuard', () => {
  let guard: GuestOnlyGuard;

  let mockFacade;
  let mockGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: MemberOnlyGuard,
          useValue: jasmine.createSpyObj('MemberOnlyGuard', ['isAuthenticated'])
        },
        {
          provide: DaffAuthFacade,
          useValue: jasmine.createSpyObj('DaffAuthFacade', ['dispatch'])
        }
      ]
    });

    guard = TestBed.get(GuestOnlyGuard);
    mockGuard = TestBed.get(MemberOnlyGuard);
    mockFacade = TestBed.get(DaffAuthFacade);
  });

  describe('isUnauthenticated | checking if the user is not authenticated', () => {
    let expected;
    let result;

    describe('when the user is not authenticated', () => {
      beforeEach(() => {
        expected = cold('--b', { b: true });
        mockGuard.isAuthenticated.and.returnValue(hot('--a', { a: false }));
        result = guard.isUnauthenticated();
      });

      it('should return true', () => {
        expect(result).toBeObservable(expected);
      });
    });

    describe('when the user is authenticated', () => {
      beforeEach(() => {
        expected = cold('--b', { b: false });
        mockGuard.isAuthenticated.and.returnValue(hot('--a', { a: true }));
        result = guard.isUnauthenticated();
      });

      it('should return false', () => {
        expect(result).toBeObservable(expected);
      });
    });
  });

  describe('canActivate | checking if the route can be activated', () => {
    let result;

    const mockAuthCheckAction = new DaffAuthGuardCheck();

    beforeEach(() => {
      mockGuard.isAuthenticated.and.returnValue(hot('--a', { a: false }));
      result = guard.canActivate();
    });

    it('should initiate an auth check', () => {
      expect(mockFacade.dispatch).toHaveBeenCalledWith(mockAuthCheckAction);
    });
  });
});
