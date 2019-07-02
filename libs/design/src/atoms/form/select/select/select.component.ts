import { Component, ViewEncapsulation, Optional, Self, Input, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';

import { DaffFormFieldControl } from '../../form-field/form-field-control';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'select[daff-native-select]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./select.component.scss'],
  host: {
    'class': 'daff-native-select'
  },
  encapsulation: ViewEncapsulation.None,
  providers: [{provide: DaffFormFieldControl, useExisting: DaffNativeSelectComponent}],
})

export class DaffNativeSelectComponent implements DaffFormFieldControl<any> {
  @Input() formSubmitted: boolean;

  controlType = "native-select";

  focused = false;

  focus() {
    this.focused = true;
    this._elementRef.nativeElement.focus();
  }
  
  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private _elementRef: ElementRef<HTMLInputElement>
  ) {}

}
