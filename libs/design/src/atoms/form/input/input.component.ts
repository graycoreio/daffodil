import {
  Component,
  Input,
  Optional,
  Self,
  ElementRef,
  HostListener,
  ChangeDetectionStrategy,
} from '@angular/core';
import { NgControl } from '@angular/forms';

import { DaffFormFieldControl } from '../form-field/form-field-control';

/**
 * DaffInputComponent provides the same functionality as a native `<input>` and contains custom styling and functionality.
 */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'input[daff-input]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    { provide: DaffFormFieldControl, useExisting: DaffInputComponent },
  ],
  standalone: false,
})
export class DaffInputComponent implements DaffFormFieldControl {

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
