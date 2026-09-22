import {
  Component,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

import { DaffCartAddress } from '@daffodil/cart';

import { DemoGeographyAddressSummaryComponent } from '../../../../geography/components/address-summary/address-summary.component';


@Component({
  selector: 'demo-checkout-billing-summary',
  templateUrl: './billing-summary.component.html',
  styleUrls: ['./billing-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    DemoGeographyAddressSummaryComponent,
  ],
})
export class DemoCheckoutBillingAddressSummaryComponent {
  @Input() billingAddress: DaffCartAddress;
  @Input() billingAddressIsShippingAddress: boolean;
}
