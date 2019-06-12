import { Component, Input } from '@angular/core';
import { DaffAddress } from '@daffodil/core';

@Component({
  selector: 'demo-address-summary',
  templateUrl: './address-summary.component.html'
})
export class AddressSummaryComponent {
  
  @Input() address: DaffAddress;
}
