import { OnInit, Input, Component, ViewEncapsulation, HostBinding, DoCheck } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '../error-state-matcher/error-state-matcher';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'input[daff-input-validator]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./input-validator.component.scss'],
  host: {
    'class': 'daff-input-validator'
  },
  encapsulation: ViewEncapsulation.None
})
export class InputValidatorComponent implements OnInit, DoCheck {

  @Input() formSubmitted: boolean;
  @Input() formControl: FormControl;
  @Input() errorStateMatcher: ErrorStateMatcher;
  @HostBinding('class.daff-input-validator__error') errorState: boolean;
  @HostBinding('class.daff-input-validator__valid') validState: boolean;

  constructor() {}

  ngOnInit() {
    if (!this.errorStateMatcher) {
      this.errorStateMatcher = new ErrorStateMatcher();
    }

    if (!this.formControl || this.formSubmitted === undefined) {
      throw Error('formControl: FormControl and formSubmitted: boolean are required fields');
    }
  }

  ngDoCheck() {
    this.errorState = this.errorStateMatcher.isErrorState(this.formControl, this.formSubmitted);
    this.validState = !this.formControl.errors && this.formControl.touched;
  }
}
