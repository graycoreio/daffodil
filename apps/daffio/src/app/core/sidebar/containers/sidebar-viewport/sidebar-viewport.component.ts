import { BreakpointObserver } from '@angular/cdk/layout';
import { NgComponentOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  Inject,
  Injector,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  ActivatedRoute,
  ChildrenOutletContexts,
  PRIMARY_OUTLET,
} from '@angular/router';
import { map } from 'rxjs';

import {
  DaffBreakpoints,
  SERVER_SAFE_BREAKPOINT_OBSERVER,
} from '@daffodil/design';
import {
  DaffSidebarComponent,
  daffSidebarIsFloatingMode,
  DaffSidebarHeaderComponent,
} from '@daffodil/design/sidebar';
import { DAFF_VIEWPORT_COMPONENTS } from '@daffodil/design/viewport';

import { DaffioSidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'daffio-sidebar-viewport-container',
  templateUrl: './sidebar-viewport.component.html',
  styleUrls: ['./sidebar-viewport.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_VIEWPORT_COMPONENTS,
    DaffSidebarHeaderComponent,
    DaffSidebarComponent,
    NgComponentOutlet,
  ],
})
export class DaffioSidebarViewportContainer {
  /**
   * The currently active sidebar.
   */
  readonly component = this.sidebarService.activeRegistration;

  /**
   * The current sidebar mode.
   */
  readonly mode = this.sidebarService.mode;

  /**
   * Whether or not we're on a larger screen size.
   */
  readonly isBigTablet = toSignal(
    this.breakpointObserver.observe(DaffBreakpoints.BIG_TABLET).pipe(
      map((result) => result?.matches),
    ),
    { initialValue: true },
  );

  /**
   * @docs-private
   */
  readonly injector = computed(() => {
    // recompute the injector whenever the active registration changes
    this.component();
    const outlet = this.childrenOutletContext.getContext(PRIMARY_OUTLET);
    return outlet?.injector
      ? Injector.create({
        parent: outlet.injector,
        providers: [
          { provide: ActivatedRoute, useValue: outlet.route },
        ],
      })
      : this._injector;
  });

  /**
   * Whether or not to show the sidebar header content.
   */
  readonly showSidebarHeader = computed(() => {
    const component = this.component();
    const mode = this.mode();
    const isBigTablet = this.isBigTablet();
    return component?.headerStrategy ? component.headerStrategy(isBigTablet, mode) : daffSidebarIsFloatingMode(mode);
  });

  /**
   * Whether or not to show the sidebar footer content.
   */
  readonly showSidebarFooter = computed(() => {
    const component = this.component();
    const mode = this.mode();
    const isBigTablet = this.isBigTablet();
    return component?.footer && (component.footerStrategy ? component.footerStrategy(isBigTablet, mode) : daffSidebarIsFloatingMode(mode));
  });

  constructor(
    private sidebarService: DaffioSidebarService,
    @Inject(SERVER_SAFE_BREAKPOINT_OBSERVER) private breakpointObserver: BreakpointObserver,
    private childrenOutletContext: ChildrenOutletContexts,
    private _injector: Injector,
  ) { }
}
