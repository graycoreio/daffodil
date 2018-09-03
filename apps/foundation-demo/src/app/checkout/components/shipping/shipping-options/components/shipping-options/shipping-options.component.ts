import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ShippingOption } from '@daffodil/core';

import { ShippingOptionsService } from '../services/shipping-options.service';
import { ErrorStateMatcher } from '../../../../../../design/molecules/error-state-matcher/error-state-matcher.component';

@Component({
  selector: 'shipping-options',
  templateUrl: './shipping-options.component.html',
  styleUrls: ['./shipping-options.component.scss']
})
export class ShippingOptionsComponent {
  @Input() formGroup: FormGroup;
  @Input() submitted: boolean;
  shippingOptions: ShippingOption[];
  errorState: boolean;
  errorStateMatcher: ErrorStateMatcher;

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
