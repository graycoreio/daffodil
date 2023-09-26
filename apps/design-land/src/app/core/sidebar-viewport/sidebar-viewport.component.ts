import { BreakpointObserver } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
  map,
  Observable,
} from 'rxjs';

import {
  DaffBreakpoints,
  DaffSidebarMode,
  DaffSidebarModeEnum,
} from '@daffodil/design';

@Component({
  selector: 'design-land-sidebar-viewport',
  templateUrl: './sidebar-viewport.component.html',
  styleUrls: ['./sidebar-viewport.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignLandSidebarViewportComponent {
  faBars = faBars;

  public mode$: Observable<DaffSidebarMode>;

  public open = false;

  constructor(private breakpoint: BreakpointObserver) {
    this.open = this.breakpoint.isMatched(DaffBreakpoints.BIG_TABLET);
    this.mode$ = this.breakpoint.observe(DaffBreakpoints.BIG_TABLET).pipe(
      map((match) => match.matches ? DaffSidebarModeEnum.SideFixed : DaffSidebarModeEnum.Under),
    );
  }

  toggleOpen() {
    this.open = !this.open;
  }

  get ariaLabel() {
    return this.open ? 'close docs menu' : 'open docs menu';
  }
}
