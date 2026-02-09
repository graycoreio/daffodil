import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffButtonComponent } from '@daffodil/design/button';
import { DAFF_NAVBAR_COMPONENTS } from '@daffodil/design/navbar';

@Component({
  selector: 'elevated-navbar-example',
  templateUrl: './elevated-navbar.component.html',
  styleUrls: ['./elevated-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_NAVBAR_COMPONENTS,
    DaffButtonComponent,
  ],
})
export class ElevatedNavbarExampleComponent {}
