import { BreakpointObserver } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Injector,
  OnInit,
  Signal,
} from '@angular/core';
import {
  ActivatedRoute,
  ChildrenOutletContexts,
  PRIMARY_OUTLET,
} from '@angular/router';
import {
  combineLatest,
  map,
  Observable,
  startWith,
  tap,
} from 'rxjs';

import {
  DaffBreakpoints,
  SERVER_SAFE_BREAKPOINT_OBSERVER,
} from '@daffodil/design';
import {
  daffSidebarIsFloatingMode,
  DaffSidebarModeEnum,
} from '@daffodil/design/sidebar';

import { DaffioSidebarRegistration } from '../../interfaces/registration.type';
import { DaffioSidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'daffio-sidebar-viewport-container',
  templateUrl: './sidebar-viewport.component.html',
  styleUrls: ['./sidebar-viewport.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class DaffioSidebarViewportContainer implements OnInit {
  showSidebar: Signal<boolean>;
  mode$: Observable<DaffSidebarModeEnum>;
  showSidebarHeader$: Observable<boolean>;
  showSidebarFooter$: Observable<boolean>;
  isBigTablet$: Observable<boolean>;
  component$: Observable<DaffioSidebarRegistration>;
  injector = this._injector;

  ngOnInit() {
    this.component$ = this.sidebarService.activeRegistration$.pipe(
      tap(() => {
        const outlet = this.childrenOutletContext.getContext(PRIMARY_OUTLET);
        this.injector = outlet?.injector
          ? Injector.create({
            parent: outlet.injector,
            providers: [
              { provide: ActivatedRoute, useValue: outlet.route },
            ],
          })
          : this._injector;
      }),
    );
    this.showSidebar = this.sidebarService.isOpen;
    this.mode$ = this.sidebarService.mode$;
    this.isBigTablet$ = this.breakpointObserver.observe(DaffBreakpoints.BIG_TABLET).pipe(
      startWith({ matches: true }),
      map((result) => result?.matches),
    );
    this.showSidebarHeader$ = combineLatest([
      this.component$,
      this.mode$,
      this.isBigTablet$,
    ]).pipe(
      map(([component, mode, isBigTablet]) => component?.header && (component.headerStrategy ? component.headerStrategy(isBigTablet, mode) : daffSidebarIsFloatingMode(mode))),
    );
    this.showSidebarFooter$ = combineLatest([
      this.component$,
      this.mode$,
      this.isBigTablet$,
    ]).pipe(
      map(([component, mode, isBigTablet]) => component?.footer && (component.footerStrategy ? component.footerStrategy(isBigTablet, mode) : daffSidebarIsFloatingMode(mode))),
    );
  }

  constructor(
    private sidebarService: DaffioSidebarService,
    @Inject(SERVER_SAFE_BREAKPOINT_OBSERVER) private breakpointObserver: BreakpointObserver,
    private childrenOutletContext: ChildrenOutletContexts,
    private _injector: Injector,
  ) { }

  close() {
    this.sidebarService.close();
  }
}
