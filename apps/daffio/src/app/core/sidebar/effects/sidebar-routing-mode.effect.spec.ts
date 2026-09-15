import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';
import {
  BehaviorSubject,
  Observable,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffSidebarModeEnum,
  DaffSidebarRegistration,
} from '@daffodil/design/sidebar';
import { DaffRouterDataService } from '@daffodil/router';

import { DaffioSidebarRoutingModeEffects } from './sidebar-routing-mode.effects';
import { DaffioRoute } from '../../router/route.type';
import { DaffioSidebarService } from '../services/sidebar.service';

describe('DaffioSidebarRoutingModeEffects', () => {
  let effects: DaffioSidebarRoutingModeEffects;
  let actions$: Observable<any>;
  let mode: BehaviorSubject<DaffSidebarModeEnum>;
  let dataSpy: BehaviorSubject<DaffioRoute['data']>;
  let sidebarServiceSpy: jasmine.SpyObj<DaffioSidebarService>;

  beforeEach(() => {
    dataSpy = new BehaviorSubject({});
    mode = new BehaviorSubject(DaffSidebarModeEnum.Side);
    sidebarServiceSpy = jasmine.createSpyObj(
      'DaffioSidebarService',
      ['close', 'open'],
      {
        mode$: mode,
      },
    );

    TestBed.configureTestingModule({
      providers: [
        DaffioSidebarRoutingModeEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffioSidebarService,
          useValue: sidebarServiceSpy,
        },
        {
          provide: DaffRouterDataService,
          useValue: jasmine.createSpyObj('DaffRouterDataService', {}, { data$: dataSpy }),
        },
      ],
    });

    effects = TestBed.inject(DaffioSidebarRoutingModeEffects);
  });

  describe('when the router finishes navigation', () => {
    const action = {
      type: ROUTER_NAVIGATED,
    };

    describe('and when the sidebar mode is floating', () => {
      beforeEach(() => {
        mode.next(DaffSidebarModeEnum.Over);
      });

      it('should close the sidebar', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          actions$ = helpers.hot('--a', { a: action });
          helpers.expectObservable(effects.openOrCloseSidebar$).toBe('---');
        });
        expect(sidebarServiceSpy.close).toHaveBeenCalledOnceWith();
      });
    });

    describe('and when there is not a docked sidebar', () => {
      beforeEach(() => {
        dataSpy.next({
          daffioDockedSidebar: undefined,
        });
      });

      it('should close the sidebar', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          actions$ = helpers.hot('--a', { a: action });
          helpers.expectObservable(effects.openOrCloseSidebar$).toBe('---');
        });
        expect(sidebarServiceSpy.close).toHaveBeenCalledOnceWith();
      });
    });

    describe('and when the sidebar mode is docked and there is a docked sidebar', () => {
      let dockedSidebar: DaffSidebarRegistration['id'];

      beforeEach(() => {
        dockedSidebar = 'id';
        mode.next(DaffSidebarModeEnum.Side);
        dataSpy.next({
          daffioDockedSidebar: dockedSidebar,
        });
      });

      it('should open the docked sidebar', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          actions$ = helpers.hot('--a', { a: action });
          helpers.expectObservable(effects.openOrCloseSidebar$).toBe('---');
        });
        expect(sidebarServiceSpy.open).toHaveBeenCalledOnceWith(dockedSidebar);
      });
    });
  });
});
