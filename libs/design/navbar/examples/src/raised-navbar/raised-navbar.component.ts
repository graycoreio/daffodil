import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_BUTTON_COMPONENTS } from '@daffodil/design/button';
import { DAFF_NAVBAR_COMPONENTS } from '@daffodil/design/navbar';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'raised-navbar',
  templateUrl: './raised-navbar.component.html',
  styleUrls: ['./raised-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DAFF_NAVBAR_COMPONENTS,
    DAFF_BUTTON_COMPONENTS,
  ],
})
export class RaisedNavbarComponent {}
