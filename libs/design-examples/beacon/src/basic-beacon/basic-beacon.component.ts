import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffBeaconComponent } from '@daffodil/design/beacon';

@Component({
  selector: 'basic-beacon-example',
  templateUrl: './basic-beacon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffBeaconComponent,
  ],
})
export class BasicBeaconExampleComponent {}
