import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffBadgeComponent } from '@daffodil/design/badge';

@Component({
  selector: 'badge-appearances-example',
  templateUrl: './badge-appearances.component.html',
  styleUrl: './badge-appearances.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffBadgeComponent,
  ],
})
export class BadgeAppearancesExampleComponent {}
