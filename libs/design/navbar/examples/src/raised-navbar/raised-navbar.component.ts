import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffButtonModule } from '@daffodil/design/button';
import { DaffNavbarModule } from '@daffodil/design/navbar';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'raised-navbar',
  templateUrl: './raised-navbar.component.html',
  styleUrls: ['./raised-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DaffNavbarModule, DaffButtonModule],
})
export class RaisedNavbarComponent {}
