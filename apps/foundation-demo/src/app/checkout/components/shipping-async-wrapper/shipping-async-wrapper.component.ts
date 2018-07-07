import { Component, Input } from '@angular/core';

@Component({
  selector: 'shipping-async-wrapper',
  templateUrl: './shipping-async-wrapper.component.html'
})
export class ShippingAsyncWrapperComponent {

  @Input() isShippingInfoValid: Boolean;
}
