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

    { provide: DaffFormFieldControl, useExisting: DaffNativeSelectComponent },
  ],
  standalone: false,
})

export class DaffNativeSelectComponent extends DaffFormFieldControl<string | number> implements DaffFormFieldControl<string | number> {
  /**
   * @docs-private
   */
  controlType = 'native-select';

  /**
   * @docs-private
   */
  @HostBinding('class.daff-native-select') class = true;

  /**
   * Has the form been submitted.
   */
  @Input() formSubmitted: boolean;
  focused = false;

  /**
   * @docs-private
   *
   * TODO: Update functionality to match other control during refactor.
   */
  disabled = false;

  /**
   * @docs-private
   * TODO: Update functionality to match other control during refactor.
   */
  required = false;

  /**
   * @docs-private
   */
  @HostListener('focus') focus() {
    this.focused = true;
    this.emitState();
  }

  /**
   * @docs-private
   */
  @HostListener('blur') blur() {
    this.focused = false;
    this.emitState();
  }

  constructor(
    /**
     * @docs-private
     */
    @Optional() @Self() public ngControl: NgControl,
    private _elementRef: ElementRef<HTMLInputElement>,
  ) {
    super(ngControl);
  }

  onFocus() {
    this._elementRef.nativeElement.focus();
  }

  get value() {
    return this._elementRef.nativeElement.value;
  }
}
