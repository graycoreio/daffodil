import { BreakpointObserver } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
  Signal,
} from '@angular/core';
import {
  combineLatest,
  map,
  Observable,
  startWith,
} from 'rxjs';

import {
  DaffBreakpoints,
  SERVER_SAFE_BREAKPOINT_OBSERVER,
} from '@daffodil/design';
import {
  daffSidebarIsFloatingMode,
  DaffSidebarModeEnum,
} from '@daffodil/design/sidebar';

import { DaffioSidebarSectionRegistration } from '../../interfaces/section-registration.interface';
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
  component$: Observable<DaffioSidebarSectionRegistration>;
  isBigTablet$: Observable<boolean>;

  ngOnInit() {
    this.component$ = this.sidebarService.activeRegistration$;
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
  ) { }

  close() {
    this.sidebarService.close();
  }
}
