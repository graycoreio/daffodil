import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shipping-options',
  templateUrl: './shipping-options.component.html',
  styleUrls: ['./shipping-options.component.scss']
})
export class ShippingOptionsComponent {

  @Input() selectedShippingOptionIndex: number;
  @Input() shippingOptions: string[];
  @Output() selectShippingOption: EventEmitter<any> = new EventEmitter();

  constructor() { }

  onSelectShippingOption(optionIndex: number) {
    this.selectShippingOption.emit(optionIndex);
  }
}
