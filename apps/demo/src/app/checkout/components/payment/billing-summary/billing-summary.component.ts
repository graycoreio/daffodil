import { Component, Input } from '@angular/core';
import { DaffAddress } from '@daffodil/core';

@Component({
  selector: 'demo-billing-summary',
  templateUrl: './billing-summary.component.html',
  styleUrls: ['./billing-summary.component.scss']
})
export class BillingSummaryComponent {

  @Input() billingAddress: DaffAddress;
  @Input() billingAddressIsShippingAddress: boolean;
}
