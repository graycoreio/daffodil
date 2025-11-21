import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffButtonComponent } from '@daffodil/design/button';
import { DAFF_NAVBAR_COMPONENTS } from '@daffodil/design/navbar';

@Component({
  selector: 'raised-navbar-example',
  templateUrl: './raised-navbar.component.html',
  styleUrls: ['./raised-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_NAVBAR_COMPONENTS,
    DaffButtonComponent,
  ],
})
export class RaisedNavbarExampleComponent {}
