import { Component, Input, OnInit, DoCheck } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ShippingOption } from '@daffodil/core';

import { ShippingOptionsService } from '../services/shipping-options.service';
import { DaffErrorStateMatcher } from '@daffodil/design';

@Component({
  selector: 'demo-shipping-options',
  templateUrl: './shipping-options.component.html',
  styleUrls: ['./shipping-options.component.scss']
})
export class ShippingOptionsComponent implements OnInit, DoCheck {
  @Input() formGroup: FormGroup;
  @Input() submitted: boolean;
  
  shippingOptions: ShippingOption[];
  errorState: boolean;
  private errorStateMatcher: DaffErrorStateMatcher;

  constructor(
    private shippingOptionsService: ShippingOptionsService
  ) {
    this.shippingOptions = shippingOptionsService.getShippingOptions();
  }

  ngOnInit() {
    this.errorStateMatcher = new DaffErrorStateMatcher();
  }

  ngDoCheck() {
    this.errorState = this.errorStateMatcher.isErrorState(<FormControl> this.formGroup.controls['id'], this.submitted);
  }
}
