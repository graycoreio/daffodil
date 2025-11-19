import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffStickyTrackerDirective } from '@daffodil/design';

@Component({
  selector: 'basic-sticky-example',
  templateUrl: './basic-sticky.component.html',
  styleUrls: ['./basic-sticky.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffStickyTrackerDirective,
  ],
})
export class BasicStickyExampleComponent {}
