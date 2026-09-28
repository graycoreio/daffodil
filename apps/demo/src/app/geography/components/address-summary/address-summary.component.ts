import {
  Component,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

import { DaffPersonalAddress } from '@daffodil/geography';

@Component({
  selector: 'demo-geography-address-summary',
  templateUrl: './address-summary.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class DemoGeographyAddressSummaryComponent {
  @Input() address: DaffPersonalAddress;
}
