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

import { DaffBreakpoints } from '@daffodil/design';
import {
  DaffSidebarMode,
  DaffSidebarModeEnum,
} from '@daffodil/design/sidebar';

@Component({
  selector: 'design-land-sidebar-viewport',
  templateUrl: './sidebar-viewport.component.html',
  styleUrls: ['./sidebar-viewport.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class DesignLandSidebarViewportComponent {
  faBars = faBars;

  public mode$: Observable<DaffSidebarMode>;

  public open = false;

  constructor(private breakpoint: BreakpointObserver) {
    this.mode$ = this.breakpoint.observe(DaffBreakpoints.BIG_TABLET).pipe(
      map((match) => {
        if (match.matches) {
          this.open = true;
          return DaffSidebarModeEnum.SideFixed;
        } else {
          this.open = false;
          return DaffSidebarModeEnum.Over;
        }
      }),
    );
  }

  toggleOpen() {
    this.open = !this.open;
  }

  get ariaLabel() {
    return this.open ? 'close docs menu' : 'open docs menu';
  }
}
