import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_BUTTON_COMPONENTS } from '@daffodil/design/button';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';
import { DAFF_NAVBAR_COMPONENTS } from '@daffodil/design/navbar';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'contained-navbar',
  templateUrl: './contained-navbar.component.html',
  styleUrls: ['./contained-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DAFF_NAVBAR_COMPONENTS,
    DAFF_CONTAINER_COMPONENTS,
    DAFF_BUTTON_COMPONENTS,
  ],
})
export class ContainedNavbarComponent {}
