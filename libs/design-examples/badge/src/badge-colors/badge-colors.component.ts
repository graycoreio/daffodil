import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffBadgeComponent } from '@daffodil/design/badge';

@Component({
  selector: 'badge-colors-example',
  templateUrl: './badge-colors.component.html',
  styleUrl: './badge-colors.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffBadgeComponent,
  ],
})
export class BadgeColorsExampleComponent {}
