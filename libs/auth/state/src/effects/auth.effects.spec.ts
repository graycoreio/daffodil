import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  hot,
  cold,
} from 'jasmine-marbles';
import {
  Observable ,
  of,
} from 'rxjs';

import { DaffAuthStorageService } from '@daffodil/auth';
import {
  DaffAuthDriver,
  DaffAuthServiceInterface,
  DaffAuthenticationFailedError,
} from '@daffodil/auth/driver';
import {
  DaffAuthGuardCheck,
  DaffAuthGuardCheckCompletion,
  DaffAuthCheck,
  DaffAuthCheckSuccess,
  DaffAuthCheckFailure,
} from '@daffodil/auth/state';
import { daffTransformErrorToStateError } from '@daffodil/core/state';

import { DaffAuthEffects } from './auth.effects';

describe('@daffodil/auth/state | DaffAuthEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffAuthEffects;

  let daffAuthStorageService: DaffAuthStorageService;
  let daffAuthDriver: jasmine.SpyObj<DaffAuthServiceInterface>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffAuthEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffAuthDriver,
          useValue: jasmine.createSpyObj('DaffAuthService', ['check']),
        },
      ],
    });

    effects = TestBed.inject(DaffAuthEffects);

    daffAuthDriver = TestBed.inject<jasmine.SpyObj<DaffAuthServiceInterface>>(DaffAuthDriver);
    daffAuthStorageService = TestBed.inject(DaffAuthStorageService);

    spyOn(daffAuthStorageService, 'removeAuthToken');
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('guardCheck$ | indicating the completion and result of an auth token check operation', () => {
    let expected;
    const mockAuthCheckAction = new DaffAuthGuardCheck();

    describe('and the check is successful', () => {
      beforeEach(() => {
        const mockAuthCheckCompletionAction = new DaffAuthGuardCheckCompletion(true);
        daffAuthDriver.check.and.returnValue(of(undefined));

        actions$ = hot('--a', { a: mockAuthCheckAction });
        expected = cold('--b', { b: mockAuthCheckCompletionAction });
      });

      it('should notify state that the check succeeded', () => {
        expect(effects.guardCheck$).toBeObservable(expected);
      });
    });

    describe('and the check fails', () => {
      beforeEach(() => {
        const error = 'Auth token is not valid';
        const response = cold('#', {}, error);
        const mockAuthCheckCompletionAction = new DaffAuthGuardCheckCompletion(false);
        daffAuthDriver.check.and.returnValue(response);

        actions$ = hot('--a', { a: mockAuthCheckAction });
        expected = cold('--b', { b: mockAuthCheckCompletionAction });
      });

      it('should notify state that the check failed', () => {
        expect(effects.guardCheck$).toBeObservable(expected);
      });

      it('should remove the auth token from storage', () => {
        expect(effects.guardCheck$).toBeObservable(expected);
        expect(daffAuthStorageService.removeAuthToken).toHaveBeenCalledWith();
      });
    });
  });

  describe('check$ | when the user checks if their auth token is valid', () => {
    let expected;

    const mockAuthCheckAction = new DaffAuthCheck();

    describe('and the check is successful', () => {
      beforeEach(() => {
        daffAuthDriver.check.and.returnValue(of(undefined));
        const mockAuthCheckSuccessAction = new DaffAuthCheckSuccess();

        actions$ = hot('--a', { a: mockAuthCheckAction });
        expected = cold('--b', { b: mockAuthCheckSuccessAction });
      });

      it('should notify state that the check succeeded', () => {
        expect(effects.check$).toBeObservable(expected);
      });
    });

    describe('and the check fails', () => {
      beforeEach(() => {
        const error = new DaffAuthenticationFailedError('Auth token is not valid');
        const response = cold('#', {}, error);
        daffAuthDriver.check.and.returnValue(response);
        const mockAuthCheckFailureAction = new DaffAuthCheckFailure(daffTransformErrorToStateError(error));

        actions$ = hot('--a', { a: mockAuthCheckAction });
        expected = cold('--b', { b: mockAuthCheckFailureAction });
      });

      it('should notify state that the check failed', () => {
        expect(effects.check$).toBeObservable(expected);
      });

      it('should remove the auth token from storage', () => {
        expect(effects.check$).toBeObservable(expected);
        expect(daffAuthStorageService.removeAuthToken).toHaveBeenCalledWith();
      });
    });
  });
});
