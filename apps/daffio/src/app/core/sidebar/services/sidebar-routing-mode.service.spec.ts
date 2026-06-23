import {
  signal,
  WritableSignal,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  NavigationEnd,
  Router,
} from '@angular/router';
import { Subject } from 'rxjs';

import { DaffSidebarModeEnum } from '@daffodil/design/sidebar';

import { DaffioSidebarRoutingModeService } from './sidebar-routing-mode.service';
import { DaffioSidebarService } from './sidebar.service';

describe('DaffioSidebarRoutingModeService', () => {
  let events: Subject<any>;
  let snapshotRoot: any;
  let mode: WritableSignal<DaffSidebarModeEnum>;
  let sidebarServiceSpy: jasmine.SpyObj<DaffioSidebarService>;

  /**
   * Emits a completed navigation and flushes the resulting effect.
   */
  const navigate = () => {
    events.next(new NavigationEnd(1, '/', '/'));
    TestBed.tick();
  };

  beforeEach(() => {
    events = new Subject();
    snapshotRoot = { data: {}, firstChild: null };
    mode = signal(DaffSidebarModeEnum.Side);
    sidebarServiceSpy = jasmine.createSpyObj('DaffioSidebarService', ['open', 'close']);
    (sidebarServiceSpy as any).mode = mode;

    TestBed.configureTestingModule({
      providers: [
        {
          provide: Router,
          useValue: {
            events,
            routerState: {
              snapshot: {
                get root() {
                  return snapshotRoot;
                },
              },
            },
          },
        },
        {
          provide: DaffioSidebarService,
          useValue: sidebarServiceSpy,
        },
      ],
    });

    TestBed.inject(DaffioSidebarRoutingModeService);
  });

  describe('when the router finishes navigation', () => {
    describe('and the sidebar mode is floating', () => {
      beforeEach(() => {
        mode.set(DaffSidebarModeEnum.Under);
        snapshotRoot.data = { daffioDockedSidebar: 'id' };
        navigate();
      });

      it('should close the sidebar', () => {
        expect(sidebarServiceSpy.close).toHaveBeenCalledTimes(1);
        expect(sidebarServiceSpy.open).not.toHaveBeenCalled();
      });
    });

    describe('and there is not a docked sidebar', () => {
      beforeEach(() => {
        mode.set(DaffSidebarModeEnum.Side);
        snapshotRoot.data = {};
        navigate();
      });

      it('should close the sidebar', () => {
        expect(sidebarServiceSpy.close).toHaveBeenCalledTimes(1);
        expect(sidebarServiceSpy.open).not.toHaveBeenCalled();
      });
    });

    describe('and the sidebar mode is docked and there is a docked sidebar', () => {
      beforeEach(() => {
        mode.set(DaffSidebarModeEnum.Side);
        snapshotRoot.data = { daffioDockedSidebar: 'id' };
        navigate();
      });

      it('should open the docked sidebar', () => {
        expect(sidebarServiceSpy.open).toHaveBeenCalledOnceWith('id');
        expect(sidebarServiceSpy.close).not.toHaveBeenCalled();
      });
    });

    describe('and the docked sidebar is declared on a nested route', () => {
      beforeEach(() => {
        mode.set(DaffSidebarModeEnum.Side);
        snapshotRoot.data = {};
        snapshotRoot.firstChild = {
          data: { daffioDockedSidebar: 'nested' },
          firstChild: null,
        };
        navigate();
      });

      it('should open the nested docked sidebar', () => {
        expect(sidebarServiceSpy.open).toHaveBeenCalledOnceWith('nested');
      });
    });
  });
});
