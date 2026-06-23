import {
  effect,
  Injectable,
  untracked,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  ActivatedRouteSnapshot,
  NavigationEnd,
  Router,
} from '@angular/router';
import { filter } from 'rxjs';

import {
  daffSidebarIsDockedMode,
} from '@daffodil/design/sidebar';

import { DaffioSidebarService } from './sidebar.service';
import { DaffioSidebarRegistration } from '../interfaces/registration.type';
import { DaffioRoute } from '../../router/route.type';

/**
 * Opens or closes the sidebar in response to Angular's native router
 * navigation events. When the activated route declares a docked sidebar and
 * the sidebar is in a docked mode, that sidebar is opened; otherwise the
 * sidebar is closed.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffioSidebarRoutingModeService {
  /**
   * Emits on every completed navigation so the routing-mode effect re-evaluates
   * the docked sidebar for the newly activated route.
   */
  private readonly navigationEnd = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
    ),
  );

  constructor(
    private router: Router,
    private sidebarService: DaffioSidebarService,
  ) {
    effect(() => {
      // re-evaluate whenever a navigation completes or the sidebar mode changes
      this.navigationEnd();
      const mode = this.sidebarService.mode();
      const dockedSidebar = this.getDockedSidebar();

      // open/close mutate sidebar state, so isolate them from the reactive
      // graph to avoid feeding their signal reads/writes back into this effect
      untracked(() => {
        if (daffSidebarIsDockedMode(mode) && dockedSidebar) {
          this.sidebarService.open(dockedSidebar);
        } else {
          this.sidebarService.close();
        }
      });
    });
  }

  /**
   * Collects the `daffioDockedSidebar` declared along the primary outlet's
   * activated route tree, preferring more deeply nested routes.
   */
  private getDockedSidebar(): DaffioSidebarRegistration['id'] | undefined {
    let route: ActivatedRouteSnapshot | null = this.router.routerState.snapshot.root;
    let dockedSidebar: DaffioSidebarRegistration['id'] | undefined;

    while (route) {
      const data = route.data as DaffioRoute['data'];

      if (data?.daffioDockedSidebar) {
        dockedSidebar = data.daffioDockedSidebar;
      }

      route = route.firstChild;
    }

    return dockedSidebar;
  }
}
