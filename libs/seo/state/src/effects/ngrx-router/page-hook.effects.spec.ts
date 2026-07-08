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
import { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

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
    let providedAction;

    beforeEach(() => {
      providedAction = {
        type: mockActionType,
        test: {
          url1: 'url1',
          url2: 'url2',
        },
      };
    });

    it('should upsert all of the truthy info', () => {
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(helpers => {
        actions$ = helpers.hot('--a', { a: providedAction });
        helpers.expectObservable(effects.getData$).toBe('---');
      });
      expect(upsertSpy).toHaveBeenCalledWith('url1');
      expect(upsertSpy).toHaveBeenCalledWith('url2');
    });
  });

  describe('when ROUTER_REQUEST is triggered', () => {
    let navigationStartAction: Action;

    beforeEach(() => {
      navigationStartAction = {
        type: ROUTER_REQUEST,
      };
    });

    it('should remove the info', () => {
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(helpers => {
        actions$ = helpers.hot('--a', { a: navigationStartAction });
        helpers.expectObservable(effects.remove$).toBe('---');
      });
      expect(clearSpy).toHaveBeenCalledOnceWith();
    });
  });

  describe('when ROUTER_CANCEL is triggered', () => {
    let navigationCancelAction: Action;

    beforeEach(() => {
      navigationCancelAction = {
        type: ROUTER_CANCEL,
      };
    });

    it('should restore the info', () => {
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(helpers => {
        actions$ = helpers.hot('--a', { a: navigationCancelAction });
        helpers.expectObservable(effects.restore$).toBe('---');
      });
      expect(restoreSpy).toHaveBeenCalledOnceWith();
    });
  });

  describe('when ROUTER_ERROR is triggered', () => {
    let navigationCancelAction: Action;

    beforeEach(() => {
      navigationCancelAction = {
        type: ROUTER_ERROR,
      };
    });

    it('should restore the info', () => {
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(helpers => {
        actions$ = helpers.hot('--a', { a: navigationCancelAction });
        helpers.expectObservable(effects.restore$).toBe('---');
      });
      expect(restoreSpy).toHaveBeenCalledOnceWith();
    });
  });

  describe('when ROUTER_NAVIGATED is triggered', () => {
    let navigationStartAction: Action;

    beforeEach(() => {
      navigationStartAction = {
        type: ROUTER_NAVIGATED,
      };
    });

    it('should empty the restore cache', () => {
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(helpers => {
        actions$ = helpers.hot('--a', { a: navigationStartAction });
        helpers.expectObservable(effects.emptyRestoreCache$).toBe('---');
      });
      expect(emptySpy).toHaveBeenCalledOnceWith();
    });
  });
});
