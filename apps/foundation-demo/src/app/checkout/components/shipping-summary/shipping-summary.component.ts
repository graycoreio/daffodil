import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { ShippingAddress, ShippingOption } from '@daffodil/core';

@Component({
  selector: 'shipping-summary',
  templateUrl: './shipping-summary.component.html',
  styleUrls: ['./shipping-summary.component.scss']
})
export class ShippingSummaryComponent implements OnInit{

  @Input() shippingInfo: ShippingAddress;
  @Input() selectedShippingOption: string;
  @Output() editShippingInfo: EventEmitter<any> = new EventEmitter();
  @Output() selectShippingOption: EventEmitter<any> = new EventEmitter();
  @Output() continueToPayment: EventEmitter<any> = new EventEmitter();

  shippingOptions: ShippingOption[];
  showContinueToPayment: boolean;

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

  ngOnInit() {
    this.showContinueToPayment = true;
  }

  onEdit() {
    this.editShippingInfo.emit();
  }

  onSelectShippingOption(option: string) {
    this.selectShippingOption.emit(option);
  }

  onContinueToPayment() {
    this.showContinueToPayment = false;
    this.continueToPayment.emit();
  }
}
