import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffBeaconComponent } from '@daffodil/design/beacon';

@Component({
  selector: 'beacon-speeds-example',
  templateUrl: './beacon-speeds.component.html',
  styleUrl: './beacon-speeds.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffBeaconComponent,
  ],
})
export class BeaconSpeedsExampleComponent {}
