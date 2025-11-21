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
  selector: 'over-and-under-sidebars-example',
  templateUrl: './over-and-under-sidebars.component.html',
  styleUrls: ['over-and-under-sidebars.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_SIDEBAR_COMPONENTS,
    FaIconComponent,
    ReactiveFormsModule,
    DaffButtonComponent,
    DaffIconButtonComponent,
  ],
})
export class OverandUnderSidebarsExampleComponent {
  faTimes = faTimes;

  open = false;

  modeControl: FormControl = new FormControl('over');

  openSidebar() {
    this.open = !this.open;
  }

  closeSidebar() {
    this.open = false;
  }
}
