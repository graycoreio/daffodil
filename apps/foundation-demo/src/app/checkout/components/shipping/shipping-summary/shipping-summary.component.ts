import { Component, Output, EventEmitter, Input } from '@angular/core';
import { DaffodilAddress, ShippingOption } from '@daffodil/core';

@Component({
  selector: 'shipping-summary',
  templateUrl: './shipping-summary.component.html',
  styleUrls: ['./shipping-summary.component.scss']
})
export class ShippingSummaryComponent {

  @Input() shippingInfo: DaffodilAddress;
  @Input() selectedShippingOption: string;
  @Input() hideContinueToPayment: boolean;
  @Output() editShippingInfo: EventEmitter<any> = new EventEmitter();
  @Output() selectShippingOption: EventEmitter<any> = new EventEmitter();
  @Output() continueToPayment: EventEmitter<any> = new EventEmitter();

  shippingOptions: ShippingOption[];

  constructor() { 
    this.shippingOptions = [
      {
        id: 'standard-shipping',
        text: 'Standard'
      },
      {
        id: 'two-day-shipping',
        text: 'Two Day'
      },
      {
        id: 'one-day-shipping',
        text: 'One Day'
      }
    ]
  }

  onEdit() {
    this.editShippingInfo.emit();
  }

  onSelectShippingOption(option: string) {
    this.selectShippingOption.emit(option);
  }

  onContinueToPayment() {
    this.continueToPayment.emit();
  }
}
