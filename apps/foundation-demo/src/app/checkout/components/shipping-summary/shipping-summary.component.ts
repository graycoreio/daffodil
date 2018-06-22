import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ShippingAddress } from '@daffodil/core';

@Component({
  selector: 'shipping-summary',
  templateUrl: './shipping-summary.component.html',
  styleUrls: ['./shipping-summary.component.scss']
})
export class ShippingSummaryComponent {

  @Input() shippingInfo: ShippingAddress;
  @Input() shippingOption: string;
  @Output() editShippingInfo: EventEmitter<any> = new EventEmitter();
  @Output() updateShippingOption: EventEmitter<any> = new EventEmitter();

  constructor() { }

  onEdit() {
    this.editShippingInfo.emit();
  }

  onUpdateShippingOption(option: string) {
    this.updateShippingOption.emit(option);
  }
}
