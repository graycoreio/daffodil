import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { ShippingAddress } from '@daffodil/core';

@Component({
  selector: 'shipping',
  templateUrl: './shipping.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ShippingComponent {

  @Input() isShippingInfoValid: Boolean;
  @Input() shippingInfo: ShippingAddress;
  @Input() selectedShippingOption: string;
  @Output() updateShippingInfo: EventEmitter<any> = new EventEmitter();
  @Output() selectShippingOption: EventEmitter<any> = new EventEmitter();
  showShippingForm: boolean;

  ngOnInit() {
    this.showShippingForm = !this.isShippingInfoValid;
  }

  toggleShippingView() {
    this.showShippingForm = !this.showShippingForm;
  }

  onUpdateShippingInfo(shippingInfo: ShippingAddress) {
    this.updateShippingInfo.emit(shippingInfo);
    this.toggleShippingView();
  }

  onSelectShippingOption(shippingOption: string) {
    this.selectShippingOption.emit(shippingOption);
  }
}
