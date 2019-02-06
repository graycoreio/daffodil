import { Component, OnInit, ViewEncapsulation, Input, HostBinding, DoCheck } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DaffErrorStateMatcher } from '../../core/error-state-matcher/error-state-matcher';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[daff-select-validator]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./select-validator.component.scss'],
  host: {
    'class': 'daff-select-validator'
  },
  encapsulation: ViewEncapsulation.None
})
export class DaffSelectValidatorComponent implements OnInit, DoCheck {

  @Input() formSubmitted: boolean;
  @Input() formControl: FormControl;
  @Input() errorStateMatcher: DaffErrorStateMatcher;
  @HostBinding('class.daff-select-validator__error') errorState: boolean;
  @HostBinding('class.daff-select-validator__valid') validState: boolean;

  constructor() {}

  ngOnInit() {
    if (!this.errorStateMatcher) {
      this.errorStateMatcher = new DaffErrorStateMatcher();
    }

    if (!this.formControl || this.formSubmitted === undefined) {
      throw Error('formControl: FormControl and formSubmitted: boolean are required fields');
    }
  }

  ngDoCheck() {
    this.errorState = this.errorStateMatcher.isErrorState(this.formControl, this.formSubmitted);
    this.validState = !this.errorState && this.formControl.touched;
  }
}
