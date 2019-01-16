import { Component, Input } from '@angular/core';
import { DaffodilAddress } from '@daffodil/core';

@Component({
  selector: 'demo-billing-summary',
  templateUrl: './billing-summary.component.html',
  styleUrls: ['./billing-summary.component.scss']
})
export class BillingSummaryComponent {

  @Input() billingAddress: DaffodilAddress;
  @Input() billingAddressIsShippingAddress: boolean;
}
