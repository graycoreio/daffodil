import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ShippingOption } from '@daffodil/core';

@Component({
  selector: 'shipping-options',
  templateUrl: './shipping-options.component.html',
  styleUrls: ['./shipping-options.component.scss']
})
export class ShippingOptionsComponent {

  @Input() selectedShippingOptionId: number;
  @Input() shippingOptions: ShippingOption[];
  @Output() selectShippingOption: EventEmitter<any> = new EventEmitter();

  constructor() { }

  onSelectShippingOption(optionId: number) {
    this.selectShippingOption.emit(optionId);
  }
}
