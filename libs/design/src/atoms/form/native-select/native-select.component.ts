import {
  Component,
  ViewEncapsulation,
  Optional,
  Self,
  Input,
  ElementRef,
  HostListener,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';
import { NgControl } from '@angular/forms';

import { DaffFormFieldControl } from '../form-field/form-field-control';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'select[daff-native-select]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./native-select.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    { provide: DaffFormFieldControl, useExisting: DaffNativeSelectComponent },
  ],
  standalone: false,
})

export class DaffNativeSelectComponent implements DaffFormFieldControl {
  /**
   * @docs-private
   */
  controlType = 'native-select';

  @HostBinding('class.daff-native-select') class = true;

  /**
   * Has the form been submitted.
   */
  @Input() formSubmitted: boolean;
  focused = false;

  /**
   * @docs-private
   */
  @HostListener('focus') focus() {
    this.focused = true;
  }

  /**
   * @docs-private
   */
  @HostListener('blur') blur() {
    this.focused = false;
  }

  constructor(
    /**
     * @docs-private
     */
    @Optional() @Self() public ngControl: NgControl,
    private _elementRef: ElementRef<HTMLInputElement>,
  ) {}

  onFocus() {
    this._elementRef.nativeElement.focus();
  }

}
