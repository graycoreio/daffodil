import {
  Component,
  Input,
} from '@angular/core';

import { DaffCartAddress } from '@daffodil/cart';

import { DemoGeographyAddressSummaryComponent } from '../../../../geography/components/address-summary/address-summary.component';


@Component({
  selector: 'demo-checkout-billing-summary',
  templateUrl: './billing-summary.component.html',
  styleUrls: ['./billing-summary.component.scss'],
  imports: [
    DemoGeographyAddressSummaryComponent,
  ],
})
export class DemoCheckoutBillingAddressSummaryComponent {
  @Input() billingAddress: DaffCartAddress;
  @Input() billingAddressIsShippingAddress: boolean;
}
