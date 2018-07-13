import { OnInit, Input, Component, ViewEncapsulation, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorStateMatcher } from './error-state-matcher.component';

@Component({
  selector: 'input[input-validator]',
  template: '<ng-content></ng-content>',
  host: {
    'class': 'input-validator'
  },
  styleUrls: ['./input-validator.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputValidatorComponent implements OnInit {

  @Input() formSubmitted: boolean;
  @Input() formControl: FormControl;
  @Input() errorStateMatcher: ErrorStateMatcher;
  @HostBinding('class.input-validator__error') errorState: boolean;
  @HostBinding('class.input-validator__valid') validState: boolean;

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
    this.validState = !this.formControl.errors && this.formControl.touched;
  }
}
