import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffStickyTrackerDirective } from '@daffodil/design';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-sticky',
  templateUrl: './basic-sticky.component.html',
  styleUrls: ['./basic-sticky.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffStickyTrackerDirective,
  ],
})
export class BasicStickyComponent {}
