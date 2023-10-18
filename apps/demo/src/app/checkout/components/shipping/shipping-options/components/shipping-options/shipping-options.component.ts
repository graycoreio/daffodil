import {
  Component,
  Input,
  OnInit,
  DoCheck,
} from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormControl,
} from '@angular/forms';

import { ShippingOption } from '@daffodil/checkout';
import { DaffErrorStateMatcher } from '@daffodil/design';

import { ShippingOptionsService } from '../services/shipping-options.service';

@Component({
  selector: 'demo-shipping-options',
  templateUrl: './shipping-options.component.html',
  styleUrls: ['./shipping-options.component.scss'],
})
export class ShippingOptionsComponent implements OnInit, DoCheck {
  @Input() formGroup: UntypedFormGroup;
  @Input() submitted: boolean;

  shippingOptions: ShippingOption[];
  errorState: boolean;
  private errorStateMatcher: DaffErrorStateMatcher;

  constructor(
    private shippingOptionsService: ShippingOptionsService,
  ) {
    this.shippingOptions = shippingOptionsService.getShippingOptions();
  }

  ngOnInit() {
    this.errorStateMatcher = new DaffErrorStateMatcher();
  }

  ngDoCheck() {
    this.errorState = this.errorStateMatcher.isErrorState(<UntypedFormControl> this.formGroup.controls['id'], this.submitted);
  }
}
