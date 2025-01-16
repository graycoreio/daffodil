import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffButtonComponent } from '@daffodil/design/button';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';
import { DAFF_NAVBAR_COMPONENTS } from '@daffodil/design/navbar';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'contained-navbar',
  templateUrl: './contained-navbar.component.html',
  styleUrls: ['./contained-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_NAVBAR_COMPONENTS,
    DAFF_CONTAINER_COMPONENTS,
    DaffButtonComponent,
  ],
})
export class ContainedNavbarComponent {}
