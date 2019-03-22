import { Component, Output, EventEmitter, Input } from '@angular/core';

import { DaffodilAddress } from '@daffodil/core';
import { ShippingOption } from '@daffodil/checkout';

import { ShippingOptionsService } from '../shipping-options/components/services/shipping-options.service';

@Component({
  selector: 'demo-shipping-summary',
  templateUrl: './shipping-summary.component.html',
  styleUrls: ['./shipping-summary.component.scss']
})
export class ShippingSummaryComponent {

  @Input() shippingAddress: DaffodilAddress;
  @Input() selectedShippingOptionId: string;
  @Output() editShippingInfo: EventEmitter<any> = new EventEmitter();

  shippingOptions: ShippingOption[];

  constructor(
    private shippingOptionsService: ShippingOptionsService
  ) {
    this.shippingOptions = shippingOptionsService.getShippingOptions();
  }

  getSelectedShippingOption() {
    for(let i=0;i<this.shippingOptions.length; i++) {
      if(this.shippingOptions[i].id === this.selectedShippingOptionId) {
        return this.shippingOptions[i].text;
      }
    }
  }

  onEdit() {
    this.editShippingInfo.emit();
  }
}
