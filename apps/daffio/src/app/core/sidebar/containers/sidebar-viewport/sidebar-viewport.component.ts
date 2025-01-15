import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Signal,
} from '@angular/core';
import {
  combineLatest,
  map,
  Observable,
} from 'rxjs';

import {
  daffSidebarIsFloatingMode,
  DaffSidebarModeEnum,
} from '@daffodil/design/sidebar';

import { DaffioSidebarRegistration } from '../../registration/type';
import { DaffioSidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'daffio-sidebar-viewport-container',
  templateUrl: './sidebar-viewport.component.html',
  styleUrls: ['./sidebar-viewport.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioSidebarViewportContainer implements OnInit {
  showSidebar: Signal<boolean>;
  mode$: Observable<DaffSidebarModeEnum>;
  showSidebarHeader$: Observable<boolean>;
  showSidebarFooter$: Observable<boolean>;
  component$: Observable<DaffioSidebarRegistration>;

  ngOnInit() {
    this.component$ = this.sidebarService.activeRegistration$;
    this.showSidebar = this.sidebarService.isOpen;
    this.mode$ = this.sidebarService.mode$;
    this.showSidebarHeader$ = combineLatest([
      this.component$,
      this.mode$,
    ]).pipe(
      map(([component, mode]) => component?.header && (component.alwaysShowHeader || daffSidebarIsFloatingMode(mode))),
    );
    this.showSidebarFooter$ = combineLatest([
      this.component$,
      this.mode$,
    ]).pipe(
      map(([component, mode]) => component?.footer && (component.alwaysShowFooter || daffSidebarIsFloatingMode(mode))),
    );
  }

  constructor(
    private sidebarService: DaffioSidebarService,
  ) { }

  close() {
    this.sidebarService.close();
  }
}
