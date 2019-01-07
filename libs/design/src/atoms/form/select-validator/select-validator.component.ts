import { Component, OnInit, ViewEncapsulation, Input, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '../error-state-matcher/error-state-matcher';

@Component({
  selector: '[select-validator]',
  template: '<ng-content></ng-content>',
  host: {
    'class': 'select-validator'
  },
  styleUrls: ['./select-validator.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectValidatorComponent implements OnInit {

  @Input() formSubmitted: boolean;
  @Input() formControl: FormControl;
  @Input() errorStateMatcher: ErrorStateMatcher;
  @HostBinding('class.select-validator__error') errorState: boolean;
  @HostBinding('class.select-validator__valid') validState: boolean;

  constructor() {}

  ngOnInit() {
    if (!this.errorStateMatcher) {
      this.errorStateMatcher = new ErrorStateMatcher();
    }

    if (!this.formControl || this.formSubmitted === undefined) {
      throw 'formControl: FormControl and formSubmitted: boolean are required fields';
    }
  }

  ngDoCheck() {
    this.errorState = this.errorStateMatcher.isErrorState(this.formControl, this.formSubmitted);
    this.validState = !this.errorState && this.formControl.touched;
  }
}
