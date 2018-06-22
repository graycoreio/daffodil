import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shipping-option',
  templateUrl: './shipping-option.component.html',
  styleUrls: ['./shipping-option.component.scss']
})
export class ShippingOptionComponent {

  @Input() shippingOption: string;
  @Output() updateShippingOption: EventEmitter<any> = new EventEmitter();

  constructor() { }

  onUpdateShippingOption(option: string) {
    this.updateShippingOption.emit(option);
  }
}
