import {
  BreakpointObserver,
  BreakpointState,
} from '@angular/cdk/layout';
import { TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffSidebarModeEnum,
  DaffSidebarRegistration,
} from '@daffodil/design/sidebar';
import { DaffRouterDataService } from '@daffodil/router';

import { DaffioSidebarService } from './sidebar.service';
import { DAFFIO_NAV_SIDEBAR_ID } from '../../nav/header/sidebar-id';
import { DaffioRoute } from '../../router/route.type';

describe('DaffioSidebarService', () => {
  let service: DaffioSidebarService;
  let dataSpy: BehaviorSubject<DaffioRoute['data']>;
  let breakpointSpy: BehaviorSubject<BreakpointState>;
  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    dataSpy = new BehaviorSubject({});
    breakpointSpy = new BehaviorSubject({
      matches: false,
      breakpoints: {},
    });

    TestBed.configureTestingModule({
      providers: [
        {
          provide: DaffRouterDataService,
          useValue: jasmine.createSpyObj('DaffRouterDataService', [], { data$: dataSpy }),
        },
        {
          provide: BreakpointObserver,
          useValue: jasmine.createSpyObj('BreakpintObserver', { observe: breakpointSpy }),
        },
      ],
    });

    service = TestBed.inject(DaffioSidebarService);
  });

  describe('when the viewport is big tablet or bigger', () => {
    beforeEach(() => {
      breakpointSpy.next({ matches: true, breakpoints: {}});
    });

    it('should pull sidebar mode from router data', () => {
      dataSpy.next({
        sidebarMode: DaffSidebarModeEnum.Side,
      });
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.mode$).toBe('a', { a: DaffSidebarModeEnum.Side });
      });
    });

    it('should default the mode to side-fixed', () => {
      dataSpy.next({});
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.mode$).toBe('a', { a: DaffSidebarModeEnum.SideFixed });
      });
    });
  });

  it('should have a mode of under when the viewport is smaller than big tablet', () => {
    breakpointSpy.next({ matches: false, breakpoints: {}});

    scheduler.run(({ expectObservable }) => {
      expectObservable(service.mode$).toBe('(ab)', { a: DaffSidebarModeEnum.SideFixed, b: DaffSidebarModeEnum.Under });
    });
  });

  describe('activeRegistration$', () => {
    let testRegistration: DaffSidebarRegistration;

    beforeEach(() => {
      testRegistration = {
        id: DAFFIO_NAV_SIDEBAR_ID,
      };
      dataSpy.next({
        daffioSidebars: {
          [DAFFIO_NAV_SIDEBAR_ID]: testRegistration,
        },
      });
    });

    it('should default to the nav links registration', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.activeRegistration$).toBe('a', { a: testRegistration });
      });
    });

    it('should only emit an activeRegistration when the sidebar actually changes', () => {
      scheduler.run(({ expectObservable, cold: coldMarble }) => {
        coldMarble('-a').subscribe(() => {
          dataSpy.next({
            daffioSidebars: {
              [DAFFIO_NAV_SIDEBAR_ID]: { id: DAFFIO_NAV_SIDEBAR_ID },
            },
          });
        });
        expectObservable(service.activeRegistration$).toBe('a', { a: testRegistration });
      });
    });

    describe('when an unknown sidebar is opened', () => {
      beforeEach(() => {
        service.open('id');
      });

      it('should not return a registration', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(service.activeRegistration$).toBe('a', { a: undefined });
        });
      });
    });

    describe('when a known sidebar is opened', () => {
      beforeEach(() => {
        testRegistration = {
          id: 'id',
        };
        dataSpy.next({
          daffioSidebars: {
            id: testRegistration,
          },
        });
        service.open(testRegistration.id);
      });

      it('should return the registration', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(service.activeRegistration$).toBe('a', { a: testRegistration });
        });
      });
    });
  });
});
