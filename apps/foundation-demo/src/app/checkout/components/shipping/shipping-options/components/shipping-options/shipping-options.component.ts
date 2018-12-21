import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ShippingOption } from '@daffodil/core';

import { ShippingOptionsService } from '../services/shipping-options.service';
import { ErrorStateMatcher } from '@daffodil/design';

@Component({
  selector: 'demo-shipping-options',
  templateUrl: './shipping-options.component.html',
  styleUrls: ['./shipping-options.component.scss']
})
export class ShippingOptionsComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() submitted: boolean;
  
  shippingOptions: ShippingOption[];
  errorState: boolean;
  private errorStateMatcher: ErrorStateMatcher;

  constructor(
    private shippingOptionsService: ShippingOptionsService
  ) {
    this.shippingOptions = shippingOptionsService.getShippingOptions();
  }

  ngOnInit() {
    this.errorStateMatcher = new ErrorStateMatcher();
  }

  ngDoCheck() {
    this.errorState = this.errorStateMatcher.isErrorState(<FormControl> this.formGroup.controls['id'], this.submitted);
  }
}
