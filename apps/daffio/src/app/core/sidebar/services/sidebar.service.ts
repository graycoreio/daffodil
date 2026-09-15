import { BreakpointObserver } from '@angular/cdk/layout';
import {
  computed,
  Inject,
  Injectable,
  isDevMode,
  signal,
  WritableSignal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

import {
  DaffBreakpoints,
  SERVER_SAFE_BREAKPOINT_OBSERVER,
} from '@daffodil/design';
import { DaffSidebarModeEnum } from '@daffodil/design/sidebar';
import { DaffViewportService } from '@daffodil/design/viewport';
import { DaffRouterDataService } from '@daffodil/router';

import { DaffioRoute } from '../../router/route.type';
import { DaffioSidebarRegistration } from '../interfaces/registration.type';
/**
 * A sidebar service that handles the mode logic and pulling the active registration from {@link DaffioRouteWithSidebars#data#daffioSidebars}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffioSidebarService  {
  private _id: WritableSignal<DaffioSidebarRegistration['id'] | undefined> = signal(undefined);

  readonly id = this._id.asReadonly();

  private routerData = toSignal(this.routerDataService.data$);

  readonly isBigTablet = toSignal(
    this.breakpointObserver.observe(DaffBreakpoints.BIG_TABLET).pipe(
      map((result) => result?.matches),
    ),
    { initialValue: true },
  );
  readonly activeRegistration = computed(() => {
    const id = this._id();
    const sidebars = this.routerData()?.daffioSidebars;
    const dockedSidebarId = this.routerData()?.daffioDockedSidebar;
    if(dockedSidebarId && this.isBigTablet() && sidebars?.[dockedSidebarId]) {
      return sidebars?.[dockedSidebarId];
    }
    if(!id) {
      return undefined;
    }
    if(!sidebars?.[id] && isDevMode()) {
      console.warn(
        `Possible missing sidebar registration for ID: "${id}". ` +
          `Available sidebar IDs: [${Object.keys(sidebars || {}).join(', ')}]. ` +
          `Ensure the route data includes this sidebar ID in the daffioSidebars configuration.`,
      );
    }
    return sidebars?.[id];
  });

  readonly mode = computed(() => {
    const data = this.routerData();

    if(this.isBigTablet()) {
      return data?.sidebarMode || DaffSidebarModeEnum.SideFixed;
    } else {
      return DaffSidebarModeEnum.Under;
    }
  });

  constructor(
    @Inject(SERVER_SAFE_BREAKPOINT_OBSERVER) private breakpointObserver: BreakpointObserver,
    private routerDataService: DaffRouterDataService<DaffioRoute['data']>,
    private viewportService: DaffViewportService,
  ) {}

  /**
   * Opens the specified sidebar.
   *
   * @param id The optional sidebar ID. If omitted the most recently passed opened sidebar ID will persist (or the default if none was passed).
   */
  open(id?: DaffioSidebarRegistration['id']) {
    if (id) {
      this._id.set(id);
    }
    this.viewportService.open(this.activeRegistration()?.side ?? 'left');
  };

  /**
   * Closes the sidebar. Does not clear the ID.
   */
  close() {
    this.viewportService.close(this.activeRegistration()?.side ?? 'left');
  }
}
