import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { Action } from '@ngrx/store';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { provideMockActions } from '@ngrx/effects/testing';
import { Actions } from '@ngrx/effects';

import { hot, cold, getTestScheduler } from 'jasmine-marbles';

import { SidebarEffects } from './sidebar.effects';
import * as SidebarActions from '../actions/sidebar.actions';

describe('Daffio | SidebarEffects', () => {
  let effects: SidebarEffects;
  let actions$: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SidebarEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(SidebarEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when a ROUTER_NAVIGATION occurs', () => {
    const action: Action = { type: ROUTER_NAVIGATION};
    const completion = new SidebarActions.CloseSidebar();

    it('should dispatch CloseSidebar with some delay', () => {
        let expected; 

        actions$ = hot( '--a', { a: action });
        expected = cold('---b', { b: completion });

        expect(effects.closeOnPageChange$(10, getTestScheduler())).toBeObservable(expected);
    });
  });
});
