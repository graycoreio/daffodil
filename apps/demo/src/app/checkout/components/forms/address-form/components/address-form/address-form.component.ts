import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { DaffErrorStateMatcher } from '@daffodil/design';

@Component({
  selector: 'demo-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() submitted: boolean;

  stateErrorStateMatcher: DaffErrorStateMatcher;

  constructor() { }

  stateSelectValues = [
    'State',
    'California'
  ];

  ngOnInit() {
    this.stateErrorStateMatcher = new DaffErrorStateMatcher();
    this.stateErrorStateMatcher.isErrorState = (control: FormControl, formSubmitted: boolean) => {
      return (control.errors || control.value === 'State') && (control.touched || formSubmitted);
    }
  }
}
