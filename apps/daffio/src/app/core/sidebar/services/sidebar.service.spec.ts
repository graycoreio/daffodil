import {
  BreakpointObserver,
  BreakpointState,
} from '@angular/cdk/layout';
import { TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

import {
  DaffSidebarModeEnum,
  DaffSidebarSideEnum,
} from '@daffodil/design/sidebar';
import { DaffViewportService } from '@daffodil/design/viewport';
import { DaffRouterDataService } from '@daffodil/router';

import { DaffioSidebarService } from './sidebar.service';
import { DaffioRoute } from '../../router/route.type';
import { DaffioSidebarRegistration } from '../interfaces/registration.type';

describe('DaffioSidebarService', () => {
  let service: DaffioSidebarService;
  let dataSpy: BehaviorSubject<DaffioRoute['data']>;
  let breakpointSpy: BehaviorSubject<BreakpointState>;
  let viewportServiceSpy: jasmine.SpyObj<DaffViewportService>;

  beforeEach(() => {
    dataSpy = new BehaviorSubject({});
    breakpointSpy = new BehaviorSubject({
      matches: false,
      breakpoints: {},
    });
    viewportServiceSpy = jasmine.createSpyObj('DaffViewportService', ['open', 'close']);

    TestBed.configureTestingModule({
      providers: [
        {
          provide: DaffRouterDataService,
          useValue: jasmine.createSpyObj('DaffRouterDataService', [], { data$: dataSpy }),
        },
        {
          provide: BreakpointObserver,
          useValue: jasmine.createSpyObj('BreakpointObserver', { observe: breakpointSpy }),
        },
        {
          provide: DaffViewportService,
          useValue: viewportServiceSpy,
        },
      ],
    });

    service = TestBed.inject(DaffioSidebarService);
  });

  describe('mode', () => {
    describe('when the viewport is big tablet or bigger', () => {
      beforeEach(() => {
        breakpointSpy.next({ matches: true, breakpoints: {}});
      });

      it('should pull the sidebar mode from router data', () => {
        dataSpy.next({
          sidebarMode: DaffSidebarModeEnum.Side,
        });

        expect(service.mode()).toEqual(DaffSidebarModeEnum.Side);
      });

      it('should default the mode to side-fixed', () => {
        dataSpy.next({});

        expect(service.mode()).toEqual(DaffSidebarModeEnum.SideFixed);
      });
    });

    it('should have a mode of under when the viewport is smaller than big tablet', () => {
      breakpointSpy.next({ matches: false, breakpoints: {}});

      expect(service.mode()).toEqual(DaffSidebarModeEnum.Under);
    });
  });

  describe('activeRegistration', () => {
    it('should be undefined when no sidebar has been opened', () => {
      expect(service.activeRegistration()).toBeUndefined();
    });

    describe('when a known sidebar is opened', () => {
      let registration: DaffioSidebarRegistration;

      beforeEach(() => {
        registration = {
          id: 'id',
        };
        dataSpy.next({
          daffioSidebars: {
            id: registration,
          },
        });
        service.open(registration.id);
      });

      it('should return the registration', () => {
        expect(service.activeRegistration()).toEqual(registration);
      });
    });

    describe('when the route declares a docked sidebar and the viewport is big tablet', () => {
      let docked: DaffioSidebarRegistration;

      beforeEach(() => {
        docked = {
          id: 'docked',
        };
        breakpointSpy.next({ matches: true, breakpoints: {}});
        dataSpy.next({
          daffioDockedSidebar: docked.id,
          daffioSidebars: {
            [docked.id]: docked,
          },
        });
      });

      it('should return the docked registration', () => {
        expect(service.activeRegistration()).toEqual(docked);
      });
    });
  });

  describe('open', () => {
    it('should open the viewport on the active sidebar side', () => {
      const registration: DaffioSidebarRegistration = {
        id: 'id',
        side: DaffSidebarSideEnum.Right,
      };
      dataSpy.next({
        daffioSidebars: {
          id: registration,
        },
      });

      service.open(registration.id);

      expect(viewportServiceSpy.open).toHaveBeenCalledWith(DaffSidebarSideEnum.Right);
    });
  });

  describe('close', () => {
    it('should close the viewport', () => {
      service.close();

      expect(viewportServiceSpy.close).toHaveBeenCalledWith('left');
    });
  });
});
