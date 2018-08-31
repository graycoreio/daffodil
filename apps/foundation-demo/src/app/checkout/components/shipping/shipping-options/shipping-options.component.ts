import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ShippingOption } from '@daffodil/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'shipping-options',
  templateUrl: './shipping-options.component.html',
  styleUrls: ['./shipping-options.component.scss']
})
export class ShippingOptionsComponent {
  @Input() formGroup: FormGroup;
  @Input() shippingOptions: ShippingOption[];
  @Input() submitted: boolean;
}
