import {
  BreakpointObserver,
  BreakpointState,
} from '@angular/cdk/layout';
import { TestBed } from '@angular/core/testing';
import {
  RouterStateSnapshot,
  ActivatedRoute,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  ROUTER_NAVIGATED,
  RouterNavigatedAction,
  DefaultRouterStateSerializer,
} from '@ngrx/router-store';
import {
  hot,
  cold,
} from 'jasmine-marbles';
import { Observable } from 'rxjs';

import {
  ResetMode,
  SetSidebarMode,
} from '../actions/sidebar.actions';
import { DaffioSidebarRoutingModeEffects } from './sidebar-routing-mode.effects';

const configureStubNavigationAction = (snapshot: any): RouterNavigatedAction => ({
  type: ROUTER_NAVIGATED,
  payload: {
    routerState: {
      url: 'this-is-url',
      root: <ActivatedRouteSnapshot><unknown>snapshot,
    },
    event: {
      id: 12,
      url: '',
      urlAfterRedirects: '',
    },
  },
});

describe('Daffio | DaffioSidebarRoutingModeEffects', () => {
  let effects: DaffioSidebarRoutingModeEffects;
  let actions$: Observable<any>;
  let breakpointObserver: BreakpointObserver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffioSidebarRoutingModeEffects,
        provideMockActions(() => actions$),
        BreakpointObserver,
      ],
    });

    breakpointObserver = TestBed.inject(BreakpointObserver);
  });

  describe('when a ROUTER_NAVIGATED occurs to a route with a `sidebarMode` in its tree', () => {
    const action = configureStubNavigationAction({
      data: {
        sidebarMode: 'side',
      },
    });

    describe('when the screen is below the "big tablet" breakpoint', () => {
      const state: BreakpointState = { matches: false, breakpoints: {}};

      it('should dispatch a ResetModeAction', () => {
        const expected = cold('--b', { b: new ResetMode() });

        actions$ = hot( '--a', { a: action });
        spyOn(breakpointObserver, 'observe').and.returnValue(hot( '--a', { a: state }));

        effects = new DaffioSidebarRoutingModeEffects(actions$, breakpointObserver);

        expect(effects.changeModeWhenVisitingConfiguredRoute$()).toBeObservable(expected);
      });
    });

    describe('when the screen is above the "big tablet" breakpoint', () => {
      const state: BreakpointState = { matches: true, breakpoints: {}};

      it('should dispatch a SetSidebarMode action with the `sidebarMode` defined on the route', () => {
        const expected = cold('--b', { b: new SetSidebarMode('side') });

        actions$ = hot( '--a', { a: action });
        spyOn(breakpointObserver, 'observe').and.returnValue(hot( '--a', { a: state }));

        effects = new DaffioSidebarRoutingModeEffects(actions$, breakpointObserver);

        expect(effects.changeModeWhenVisitingConfiguredRoute$()).toBeObservable(expected);
      });
    });
  });

  describe('when a ROUTER_NAVIGATED occurs to an route without a `sidebarMode` in its tree', () => {
    const action = configureStubNavigationAction({});
    const state: BreakpointState = { matches: false, breakpoints: {}};

    it('should dispatch a ResetMode action', () => {
      const expected = cold('--b', { b: new ResetMode() });

      actions$ = hot( '--a', { a: action });
      spyOn(breakpointObserver, 'observe').and.returnValue(hot( '--a', { a: state }));

      effects = new DaffioSidebarRoutingModeEffects(actions$, breakpointObserver);

      expect(effects.changeModeWhenVisitingConfiguredRoute$()).toBeObservable(expected);
    });
  });
});
