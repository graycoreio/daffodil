import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '../../../../design/molecules/error-state-matcher/error-state-matcher.component';

@Component({
  selector: 'address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() submitted: boolean;

  stateErrorStateMatcher: ErrorStateMatcher;

  constructor() { }

  stateSelectValues = [
    'State',
    'California'
  ];

  ngOnInit() {
    this.stateErrorStateMatcher = new ErrorStateMatcher();
    this.stateErrorStateMatcher.isErrorState = (control: FormControl, formSubmitted: boolean) => {
      return (control.errors || control.value == 'State') && (control.touched || formSubmitted);
    }
  }
}
