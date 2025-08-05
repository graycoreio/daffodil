import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import {
  DaffButtonComponent,
  DaffIconButtonComponent,
} from '@daffodil/design/button';
import { DAFF_SIDEBAR_COMPONENTS } from '@daffodil/design/sidebar';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'sidebar-sides',
  templateUrl: './sidebar-sides.component.html',
  styleUrls: ['sidebar-sides.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_SIDEBAR_COMPONENTS,
    FaIconComponent,
    ReactiveFormsModule,
    DaffButtonComponent,
    DaffIconButtonComponent,
  ],
})
export class SidebarSidesComponent {
  faTimes = faTimes;

  open = false;

  sideControl: FormControl = new FormControl('left');

  openSidebar() {
    this.open = !this.open;
  }

  closeSidebar() {
    this.open = false;
  }
}
