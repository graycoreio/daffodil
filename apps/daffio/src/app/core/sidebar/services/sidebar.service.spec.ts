import {
  BreakpointObserver,
  BreakpointState,
} from '@angular/cdk/layout';
import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';
import { BehaviorSubject } from 'rxjs';

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

  beforeEach(() => {
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
      expect(service.mode$).toBeObservable(cold('a', { a: DaffSidebarModeEnum.Side }));
    });

    it('should default the mode to side-fixed', () => {
      dataSpy.next({});
      expect(service.mode$).toBeObservable(cold('a', { a: DaffSidebarModeEnum.SideFixed }));
    });
  });

  it('should have a mode of under when the viewport is smaller than big tablet', () => {
    breakpointSpy.next({ matches: false, breakpoints: {}});

    expect(service.mode$).toBeObservable(cold('(ab)', { a: DaffSidebarModeEnum.SideFixed, b: DaffSidebarModeEnum.Under }));
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
      expect(service.activeRegistration$).toBeObservable(cold('a', { a: testRegistration }));
    });

    describe('when an unknown sidebar is opened', () => {
      beforeEach(() => {
        service.open('id');
      });

      it('should not return a registration', () => {
        expect(service.activeRegistration$).toBeObservable(cold('a', { a: undefined }));
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
        expect(service.activeRegistration$).toBeObservable(cold('a', { a: testRegistration }));
      });
    });
  });
});
