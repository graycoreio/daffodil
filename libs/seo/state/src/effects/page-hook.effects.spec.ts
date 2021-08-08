import {
  Inject,
  Injectable,
  InjectionToken,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  ROUTER_REQUEST,
  ROUTER_CANCEL,
  ROUTER_ERROR,
  ROUTER_NAVIGATED,
} from '@ngrx/router-store';
import { Action } from '@ngrx/store';
import {
  hot,
  cold,
} from 'jasmine-marbles';
import { Observable } from 'rxjs';

import { DaffSeoRestoreableServiceInterface } from '@daffodil/seo';
import { DaffSeoUpdateActionPair } from '@daffodil/seo/state';

import { DaffSeoPageHookEffects } from './page-hook.effects';

@Injectable({
  providedIn: 'root',
})
class TestService implements DaffSeoRestoreableServiceInterface<any> {
  readonly upsertCache = null;
  readonly restoreCache = null;
  get() {
    return null;
  }
  upsert(info: any) {}
  clear() {}
  restore() {}
  emptyRestoreCache() {}
}

const TEST_TOKEN = new InjectionToken<DaffSeoUpdateActionPair[]>('TEST_TOKEN');

@Injectable()
class TestEffects extends DaffSeoPageHookEffects<TestService, DaffSeoUpdateActionPair, any> {
  constructor(
    actions$: Actions,
    @Inject(TEST_TOKEN) updates: DaffSeoUpdateActionPair[],
    service: TestService,
  ) {
    super(
      actions$,
      updates,
      service,
    );
  }
}

describe('@daffodil/seo/state | DaffSeoPageHookEffects', () => {
  let actions$: Observable<any>;
  let effects: TestEffects;

  let service: TestService;
  let restoreSpy: jasmine.Spy;
  let upsertSpy: jasmine.Spy;
  let clearSpy: jasmine.Spy;
  let emptySpy: jasmine.Spy;

  let url: string;
  let mockActionType: string;

  beforeEach(() => {
    mockActionType = 'mockActionType';

    TestBed.configureTestingModule({
      providers: [
        TestEffects,
        provideMockActions(() => actions$),
        {
          provide: TEST_TOKEN,
          useValue: [
            {
              action: mockActionType,
              getData: action => action.test.url1,
            },
            {
              action: mockActionType,
              getData: action => action.test.url2,
            },
            {
              action: mockActionType,
              getData: action => action.test.thisdoesntexist,
            },
          ],
        },
      ],
    });

    effects = TestBed.inject(TestEffects);
    service = TestBed.inject(TestService);

    restoreSpy = spyOn(service, 'restore');
    upsertSpy = spyOn(service, 'upsert');
    clearSpy = spyOn(service, 'clear');
    emptySpy = spyOn(service, 'emptyRestoreCache');

    url = 'url';
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when a provided action type is dispatched', () => {
    let expected;
    let providedAction;

    beforeEach(() => {
      providedAction = {
        type: mockActionType,
        test: {
          url1: 'url1',
          url2: 'url2',
        },
      };

      actions$ = hot('--a', { a: providedAction });
      expected = cold('---');
    });

    it('should upsert all of the truthy info', () => {
      expect(effects.getData$).toBeObservable(expected);
      expect(upsertSpy).toHaveBeenCalledWith('url1');
      expect(upsertSpy).toHaveBeenCalledWith('url2');
    });
  });

  describe('when ROUTER_REQUEST is triggered', () => {
    let expected;
    let navigationStartAction: Action;

    beforeEach(() => {
      navigationStartAction = {
        type: ROUTER_REQUEST,
      };

      actions$ = hot('--a', { a: navigationStartAction });
      expected = cold('---');
    });

    it('should remove the info', () => {
      expect(effects.remove$).toBeObservable(expected);
      expect(clearSpy).toHaveBeenCalledOnceWith();
    });
  });

  describe('when ROUTER_CANCEL is triggered', () => {
    let expected;
    let navigationCancelAction: Action;

    beforeEach(() => {
      navigationCancelAction = {
        type: ROUTER_CANCEL,
      };

      actions$ = hot('--a', { a: navigationCancelAction });
    });

    it('should restore the info', () => {
      expected = cold('---');
      expect(effects.restore$).toBeObservable(expected);
      expect(restoreSpy).toHaveBeenCalledOnceWith();
    });
  });

  describe('when ROUTER_ERROR is triggered', () => {
    let expected;
    let navigationCancelAction: Action;

    beforeEach(() => {
      navigationCancelAction = {
        type: ROUTER_ERROR,
      };

      actions$ = hot('--a', { a: navigationCancelAction });
    });

    it('should restore the info', () => {
      expected = cold('---');
      expect(effects.restore$).toBeObservable(expected);
      expect(restoreSpy).toHaveBeenCalledOnceWith();
    });
  });

  describe('when ROUTER_NAVIGATED is triggered', () => {
    let expected;
    let navigationStartAction: Action;

    beforeEach(() => {
      navigationStartAction = {
        type: ROUTER_NAVIGATED,
      };

      actions$ = hot('--a', { a: navigationStartAction });
      expected = cold('---');
    });

    it('should empty the restore cache', () => {
      expect(effects.emptyRestoreCache$).toBeObservable(expected);
      expect(emptySpy).toHaveBeenCalledOnceWith();
    });
  });
});
