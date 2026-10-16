import {
  Component,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

import { DaffPersonalAddress } from '@daffodil/geography';

import { DemoGeographyAddressSummaryComponent } from '../../../../geography/components/address-summary/address-summary.component';

@Component({
  selector: 'demo-checkout-shipping-address-summary',
  templateUrl: './shipping-address-summary.component.html',
  styleUrls: ['./shipping-address-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
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
