import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffButtonComponent } from '@daffodil/design/button';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';
import { DAFF_NAVBAR_COMPONENTS } from '@daffodil/design/navbar';

@Component({
  selector: 'contained-navbar-example',
  templateUrl: './contained-navbar.component.html',
  styleUrls: ['./contained-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_NAVBAR_COMPONENTS,
    DAFF_CONTAINER_COMPONENTS,
    DaffButtonComponent,
  ],
})
export class ContainedNavbarExampleComponent {}
