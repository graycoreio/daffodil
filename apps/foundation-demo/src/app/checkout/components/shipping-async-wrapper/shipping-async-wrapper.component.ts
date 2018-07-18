import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shipping-async-wrapper',
  templateUrl: './shipping-async-wrapper.component.html'
})
export class ShippingAsyncWrapperComponent {

  @Input() isShippingInfoValid: Boolean;
  @Output() continueToPayment: EventEmitter<any> = new EventEmitter();

  onContinueToPayment() {
    this.continueToPayment.emit();
  }
}
