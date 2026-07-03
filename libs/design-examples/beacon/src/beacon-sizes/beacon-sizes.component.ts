import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffBeaconComponent } from '@daffodil/design/beacon';

@Component({
  selector: 'beacon-sizes-example',
  templateUrl: './beacon-sizes.component.html',
  styleUrl: './beacon-sizes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffBeaconComponent,
  ],
})
export class BeaconSizesExampleComponent {}
