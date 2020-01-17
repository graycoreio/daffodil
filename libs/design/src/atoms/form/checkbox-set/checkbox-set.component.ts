import {
  Component, HostBinding, Input, Self, Optional, ContentChildren,
  QueryList, ChangeDetectionStrategy, ChangeDetectorRef, AfterContentInit
} from '@angular/core';
import { NgControl, ControlValueAccessor } from '@angular/forms';

import { DaffCheckboxComponent, DaffCheckboxValueInterface } from '../checkbox/checkbox.component';
import { DaffFormFieldControl } from '../form-field/public_api';

/**
 * This attribute determines the direction that `<daff-checkbox>`es in a `<daff-checkbox-set>` are stacked.
 */
export type DaffCheckboxSetDirection = 'vertical' | 'horizontal' | undefined;
enum DaffCheckboxSetDirectionEnum {
  Vertical = 'vertical',
  Horizontal = 'horizontal'
}

/**
 * The `<daff-checkbox-set>` wraps a set of `<daff-checkbox>`, and allows the addition
 * of a 'required' `<daff-error-message>`. The touch state of `<daff-checkbox-set>`
 * is derived from the touch state of the `daff-checkbox`s it contains.
 * As a `ControlValueAccessor`, the `<daff-checkbox-set>` works out-of-the-box
 * with `@angular/forms`.
 */
@Component({
  selector: 'daff-checkbox-set',
  templateUrl: './checkbox-set.component.html',
  styleUrls: ['./checkbox-set.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: DaffFormFieldControl, useExisting: DaffCheckboxSetComponent }
  ],
})
export class DaffCheckboxSetComponent implements ControlValueAccessor, AfterContentInit {

  constructor(@Self() @Optional() public ngControl: NgControl, private _cdRef: ChangeDetectorRef) {
    if (this.ngControl) {
      // This avoids a circular import that would be created if done through providers.
      this.ngControl.valueAccessor = this;
    }
  }

  /**
   * The direction of the `<golf-checkbox>es` in a checkbox set.
   */
  @Input() direction: DaffCheckboxSetDirection = DaffCheckboxSetDirectionEnum.Vertical;

  /**
   * A class that can be hooked into the style the set.
   */
  @HostBinding('class.daff-checkbox-set') class = true;

  /**
   * A conditional class that sets the direction of a checkbox set to be vertical.
   */
  @HostBinding('class.daff-checkbox-set--vertical') get vertical() {
    return this.direction === DaffCheckboxSetDirectionEnum.Vertical;
  }

  /**
   * A conditional class that sets the direction of a checkbox set to be horizontal.
   */
  @HostBinding('class.daff-checkbox-set--horizontal') get horizontal() {
    return this.direction === DaffCheckboxSetDirectionEnum.Horizontal;
  }

  /**
   * This control is not focusable, but should
   * instead pass its focus down to its children.
   */
  focused: boolean;

  /**
   * Implemented as a part of ControlValueAccessor
   */
  onChange: Function;

  /**
   * Implemented as a part of ControlValueAccessor
   */
  onTouched: Function;

  /**
   * Internal tracking property for the value of the control.
   */
  private _value: any[] = [];

  /**
   * The list of checkboxes in the set.
   */
  @ContentChildren(DaffCheckboxComponent) checkboxes: QueryList<DaffCheckboxComponent>;

  /**
   * When we try to focus the checkbox-set, we should
   * instead focus the first child checkbox.
   */
  focus() {
    this.checkboxes.first.focus();
  }

  ngAfterContentInit() {
    this.errorForDuplicateValues(this.checkboxes.toArray().map(checkbox => checkbox.value));
    this.checkboxes.forEach((checkbox) => {
      checkbox.registerOnChange(this.onCheckboxChanged.bind(this));
      checkbox.registerOnTouched(this.onCheckboxTouched.bind(this));
    });

    this.writeValue(this._value);
  }

  /**
   * Implemented as a part of the ControlValueAccessor
   */
  writeValue(valueArray: any[]): void {
    this._value = valueArray;
    if (!this.checkboxes) {
      return;
    }

    this.errorForNonArrayValue(valueArray);
    this.errorForDuplicateValues(valueArray);
    this.errorForInvalidValues(valueArray);

    this.checkboxes.map(checkbox => {
      valueArray.indexOf(checkbox.value) >= 0
        ? checkbox.writeValue({ value: checkbox.value, status: true })
        : checkbox.writeValue({ value: checkbox.value, status: false });
    });
    this._cdRef.markForCheck();
  }

  /**
   * Implemented as a part of the ControlValueAccessor
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Implemented as a part of the ControlValueAccessor
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  private onCheckboxChanged(checkbox: DaffCheckboxValueInterface) {
    checkbox.status
      ? this.addValue(checkbox)
      : this.removeValue(checkbox);
    this._cdRef.markForCheck();
  }

  private addValue(checkbox: DaffCheckboxValueInterface): void {
    this._value = [...this._value, checkbox.value];
    this.onChange(this._value);
  }


  private removeValue(checkbox: DaffCheckboxValueInterface): void {
    const index = this._value.indexOf(checkbox.value);
    this._value = [...this._value.slice(0, index), ...this._value.slice(index + 1)];
    this.onChange(this._value);
  }

  private onCheckboxTouched() {
    this.onTouched();
    this._cdRef.markForCheck();
  }

  private errorForDuplicateValues(values: any[]) {
    const sortedValues = values.sort();
    for (let i = 0; i < sortedValues.length - 1; i++) {
      if (sortedValues[i] === sortedValues[i + 1]) {
        throw new Error('Duplicate checkbox value. Duplicates are not allowed in <daff-checkbox-set>');
      }
    }
  }

  private errorForNonArrayValue(value) {
    if (!Array.isArray(value)) {
      throw new Error('DaffCheckboxSetComponent value needs to be an array.');
    }
  }

  private errorForInvalidValues(values: any[]) {
    const checkboxValues = this.checkboxes.toArray().map(checkbox => checkbox.value);
    const invalidValues = values.filter(value => checkboxValues.indexOf(value) === -1);

    if (invalidValues.length) {
      throw new Error('Given DaffCheckboxSetComponent value has an invalid checkbox value');
    }
  }
}
