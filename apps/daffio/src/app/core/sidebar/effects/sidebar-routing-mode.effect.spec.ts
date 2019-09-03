import { TestBed } from '@angular/core/testing';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { RouterStateSnapshot, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

import { provideMockActions } from '@ngrx/effects/testing';
import { ROUTER_NAVIGATED, RouterNavigatedAction, DefaultRouterStateSerializer } from '@ngrx/router-store';
import { hot, cold } from 'jasmine-marbles';

import { Observable } from 'rxjs';
import { DaffioSidebarRoutingModeEffects } from './sidebar-routing-mode.effects';
import { ResetMode, SetSidebarMode } from '../actions/sidebar.actions';

const configureStubNavigationAction = (snapshot: any) : RouterNavigatedAction => {
  return { 
    type: ROUTER_NAVIGATED, 
    payload: {
      routerState: {
        url: 'this-is-url',
        root: snapshot as unknown as ActivatedRouteSnapshot,
      },
      event: {
        id: 12,
        url: "",
        urlAfterRedirects: ""
      }
    }
  };
}

describe('Daffio | DaffioSidebarRoutingModeEffects', () => {
  let effects: DaffioSidebarRoutingModeEffects;
  let actions$: Observable<any>;
  let breakpointObserver: BreakpointObserver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffioSidebarRoutingModeEffects,
        provideMockActions(() => actions$),
        BreakpointObserver
      ]
    });

    breakpointObserver = TestBed.get(BreakpointObserver);
  });

  describe('when a ROUTER_NAVIGATED occurs to a route with a `sidebarMode` in its tree', () => {
    const action = configureStubNavigationAction({
      data: {
        sidebarMode: "side"
      }
    });

    describe('when the screen is below the "big tablet" breakpoint', () => {
      const state: BreakpointState = {matches: false, breakpoints: {}};

      it('should dispatch a ResetModeAction', () => {
        let expected; 

        actions$ = hot( '--a', { a: action });
        spyOn(breakpointObserver, 'observe').and.returnValue(hot( '--a', { a: state }));
        
        expected = cold('--b', { b: new ResetMode() });

        effects = new DaffioSidebarRoutingModeEffects(actions$, breakpointObserver);

        expect(effects.changeModeWhenVisitingConfiguredRoute$()).toBeObservable(expected);
      });
    });
  
    describe('when the screen is above the "big tablet" breakpoint', () => {
      const state: BreakpointState = {matches: true, breakpoints: {}};

      it('should dispatch a SetSidebarMode action with the `sidebarMode` defined on the route', () => {
        let expected; 

        actions$ = hot( '--a', { a: action });
        spyOn(breakpointObserver, 'observe').and.returnValue(hot( '--a', { a: state }));
        
        expected = cold('--b', { b: new SetSidebarMode("side") });

        effects = new DaffioSidebarRoutingModeEffects(actions$, breakpointObserver);

        expect(effects.changeModeWhenVisitingConfiguredRoute$()).toBeObservable(expected);
      });
    });
  });

  describe('when a ROUTER_NAVIGATED occurs to an route without a `sidebarMode` in its tree', () => {
    const action = configureStubNavigationAction({});
    const state: BreakpointState = {matches: false, breakpoints: {}};

    it('should dispatch a ResetMode action', () => {
      let expected; 

      actions$ = hot( '--a', { a: action });
      spyOn(breakpointObserver, 'observe').and.returnValue(hot( '--a', { a: state }));
      
      expected = cold('--b', { b: new ResetMode() });

      effects = new DaffioSidebarRoutingModeEffects(actions$, breakpointObserver);

      expect(effects.changeModeWhenVisitingConfiguredRoute$()).toBeObservable(expected);
    });
  })
});
