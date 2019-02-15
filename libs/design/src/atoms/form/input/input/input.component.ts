import { Component, ViewEncapsulation, Input, HostBinding, DoCheck } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'input[daff-input]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./input.component.scss'],
  host: {
    'class': 'daff-input'
  },
  encapsulation: ViewEncapsulation.None,
})
export class DaffInputComponent implements DoCheck {

  //todo: will be removed once we upgrade to Angular 8, where markAllAsTouched will be a method on FormControl.
  @Input() formSubmitted: boolean;
  @Input() formControl: FormControl;
  @HostBinding('class.daff-input__error') isError: boolean;
  @HostBinding('class.daff-input__valid') isValid: boolean;

  ngDoCheck() {
    if(this.formControl) {
      this.isError = this.formControl.errors && (this.formControl.touched || this.formSubmitted);
      this.isValid = !this.formControl.errors && this.formControl.touched;
    }
  }
}
