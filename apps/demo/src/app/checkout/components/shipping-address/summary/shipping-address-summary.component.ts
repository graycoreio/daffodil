import {
  Component,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';

import { DaffPersonalAddress } from '@daffodil/geography';

import { DemoGeographyAddressSummaryComponent } from '../../../../geography/components/address-summary/address-summary.component';

@Component({
  selector: 'demo-checkout-shipping-address-summary',
  templateUrl: './shipping-address-summary.component.html',
  styleUrls: ['./shipping-address-summary.component.scss'],
  imports: [
    DemoGeographyAddressSummaryComponent,
  ],
})
export class DemoCheckoutShippingAddressSummaryComponent {
  @Input() shippingAddress: DaffPersonalAddress;

  @Output() edit = new EventEmitter<void>();

  onEdit() {
    this.edit.emit();
  }
}
