import { Component, ViewEncapsulation, Input, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '../error-state-matcher/error-state-matcher';

@Component({
  selector: 'input[daff-input]',
  host: {'class': 'daff-input'},
  template: '<ng-content></ng-content>',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DaffInputComponent implements OnInit {
  @Input() formSubmitted: boolean;
  @Input() formControl: FormControl;
  @Input() errorStateMatcher: ErrorStateMatcher;
  @HostBinding('class.daff-input__error') errorState: boolean;
  @HostBinding('class.daff-input__valid') validState: boolean;

  constructor() {}

  ngOnInit() {
    if (!this.errorStateMatcher) {
      this.errorStateMatcher = new ErrorStateMatcher();
    }
  }

  ngDoCheck() {
    this.errorState = this.formControl ? this.errorStateMatcher.isErrorState(this.formControl, this.formSubmitted) : false;
    this.validState = this.formControl ? (!this.formControl.errors && this.formControl.touched) : false;
  }
}
