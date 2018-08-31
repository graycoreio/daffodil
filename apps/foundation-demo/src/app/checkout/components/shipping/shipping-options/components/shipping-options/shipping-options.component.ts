import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ShippingOption } from '@daffodil/core';

import { ShippingOptionsService } from '../services/shipping-options.service';

@Component({
  selector: 'shipping-options',
  templateUrl: './shipping-options.component.html',
  styleUrls: ['./shipping-options.component.scss']
})
export class ShippingOptionsComponent {
  @Input() formGroup: FormGroup;
  @Input() submitted: boolean;
  shippingOptions: ShippingOption[];

  constructor(
    private shippingOptionsService: ShippingOptionsService
  ) {
    this.shippingOptions = shippingOptionsService.getShippingOptions();
  }
}
