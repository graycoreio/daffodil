import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  DoCheck,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffCartShippingRate } from '@daffodil/cart';
import {
  DaffErrorStateMatcher,
  DaffRadioModule,
} from '@daffodil/design';

import { DemoCheckoutShippingFormGroup } from '../../models/shipping-form.type';

@Component({
  selector: 'demo-checkout-shipping-options',
  templateUrl: './shipping-options.component.html',
  styleUrls: ['./shipping-options.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffRadioModule,
  ],
})
export class DemoCheckoutShippingOptionsComponent implements OnInit, DoCheck {
  private errorStateMatcher: DaffErrorStateMatcher;

  @Input() group: DemoCheckoutShippingFormGroup;
  @Input() options: DaffCartShippingRate[];

  errorState: boolean;

  ngOnInit() {
    this.errorStateMatcher = new DaffErrorStateMatcher();
  }

  ngDoCheck() {
    this.errorState = this.errorStateMatcher.isErrorState(this.group.controls.id, this.group.touched);
  }
}
