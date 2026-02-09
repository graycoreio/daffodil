import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffButtonComponent } from '@daffodil/design/button';
import { DAFF_NAVBAR_COMPONENTS } from '@daffodil/design/navbar';

@Component({
  selector: 'blurred-navbar-example',
  templateUrl: './blurred-navbar.component.html',
  styleUrls: ['./blurred-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_NAVBAR_COMPONENTS,
    DaffButtonComponent,
  ],
})
export class BlurredNavbarExampleComponent {}
