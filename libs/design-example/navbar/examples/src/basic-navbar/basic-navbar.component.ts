import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffButtonComponent } from '@daffodil/design/button';
import { DAFF_NAVBAR_COMPONENTS } from '@daffodil/design/navbar';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-navbar',
  templateUrl: './basic-navbar.component.html',
  styleUrls: ['./basic-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_NAVBAR_COMPONENTS,
    DaffButtonComponent,
  ],
})
export class BasicNavbarComponent {}
