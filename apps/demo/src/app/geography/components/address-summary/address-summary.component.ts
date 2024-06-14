import {
  Component,
  Input,
} from '@angular/core';

import { DaffPersonalAddress } from '@daffodil/geography';

@Component({
  selector: 'demo-geography-address-summary',
  templateUrl: './address-summary.component.html',
  standalone: true,
})
export class DemoGeographyAddressSummaryComponent {
  @Input() address: DaffPersonalAddress;
}
