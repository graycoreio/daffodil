import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffBadgeComponent } from '@daffodil/design/badge';

@Component({
  selector: 'badge-sizes-example',
  templateUrl: './badge-sizes.component.html',
  styleUrl: './badge-sizes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffBadgeComponent,
  ],
})
export class BadgeSizesExampleComponent {}
