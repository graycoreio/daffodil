import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffButtonModule } from '@daffodil/design/button';
import { DaffContainerModule } from '@daffodil/design/container';
import { DaffNavbarModule } from '@daffodil/design/navbar';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'contained-navbar',
  templateUrl: './contained-navbar.component.html',
  styleUrls: ['./contained-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DaffNavbarModule,
    DaffContainerModule,
    DaffButtonModule,
  ],
})
export class ContainedNavbarComponent {}
