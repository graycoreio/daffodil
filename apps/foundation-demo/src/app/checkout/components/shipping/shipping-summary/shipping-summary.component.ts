import { Component, Output, EventEmitter, Input } from '@angular/core';
import { DaffodilAddress } from '@daffodil/core';

@Component({
  selector: 'shipping-summary',
  templateUrl: './shipping-summary.component.html',
  styleUrls: ['./shipping-summary.component.scss']
})
export class ShippingSummaryComponent {

  @Input() shippingInfo: DaffodilAddress;
  @Input() selectedShippingOption: string;
  @Output() editShippingInfo: EventEmitter<any> = new EventEmitter();

  onEdit() {
    this.editShippingInfo.emit();
  }
}
