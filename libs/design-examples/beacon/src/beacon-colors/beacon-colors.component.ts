import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffBeaconComponent } from '@daffodil/design/beacon';

@Component({
  selector: 'beacon-colors-example',
  templateUrl: './beacon-colors.component.html',
  styleUrl: './beacon-colors.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffBeaconComponent,
  ],
})
export class BeaconColorsExampleComponent {}
