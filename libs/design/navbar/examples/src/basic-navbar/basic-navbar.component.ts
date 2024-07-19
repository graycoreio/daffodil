import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { DaffButtonModule } from '@daffodil/design/button';
import { DaffNavbarModule } from '@daffodil/design/navbar';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-navbar',
  templateUrl: './basic-navbar.component.html',
  styleUrls: ['./basic-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DaffNavbarModule, DaffButtonModule],
})
export class BasicNavbarComponent {}
