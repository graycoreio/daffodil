import {
  Component,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';

import { DaffCartShippingRate } from '@daffodil/cart';

@Component({
  selector: 'demo-checkout-shipping-summary',
  templateUrl: './shipping-summary.component.html',
  styleUrls: ['./shipping-summary.component.scss'],
  standalone: true,
})
export class DemoCheckoutShippingSummaryComponent {
  @Input() selectedShippingOption: DaffCartShippingRate;
  @Output() editShippingInfo = new EventEmitter<void>();

  onEdit() {
    this.editShippingInfo.emit();
  }
}
