import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffBeaconComponent } from '@daffodil/design/beacon';

@Component({
  selector: 'beacon-statuses-example',
  templateUrl: './beacon-statuses.component.html',
  styleUrl: './beacon-statuses.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffBeaconComponent,
  ],
})
export class BeaconStatusesExampleComponent {}
