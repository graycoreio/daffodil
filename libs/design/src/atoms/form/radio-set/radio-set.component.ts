import {
  Component, ViewEncapsulation,
  ChangeDetectionStrategy, Self,
  Optional, ContentChildren,
  QueryList, AfterContentInit,
  Input, HostBinding, OnInit, HostListener
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

import { DaffFormFieldControl } from '../form-field/public_api';
import { DaffRadioComponent } from '../radio/radio.component';

let uniqueRadioSetId = 0;

/**
 * This attribute determines the direction that `<daff-radio>`s in a `<daff-radio-set>` are stacked.
 */
export type DaffRadioSetDirection = 'vertical' | 'horizontal' | undefined;
enum DaffRadioSetDirectionEnum {
  Vertical = 'vertical',
  Horizontal = 'horizontal'
}

/**
 * The `<daff-radio-set>` wraps a set of `<daff-radio>`. The touch state of
 * `<daff-radio-set>` is derived from the touch state of the `daff-radio`s it contains.
 * As a `ControlValueAccessor`, the `<daff-radio-set>` works out-of-the-box
 * with `@angular/forms`.
 */
@Component({
  selector: 'daff-radio-set',
  templateUrl: './radio-set.component.html',
  styleUrls: ['./radio-set.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: DaffFormFieldControl, useExisting: DaffRadioSetComponent }
  ],
})
export class DaffRadioSetComponent implements ControlValueAccessor, AfterContentInit, OnInit {

  constructor(@Self() @Optional() public ngControl: NgControl) {
    if (this.ngControl) {
      // This avoids a circular import that would be created if done through providers.
      this.ngControl.valueAccessor = this;
    }
  }

  @HostBinding('class.daff-radio-set') class = true;

  /**
   * The direction of the `<golf-radio>s` in a radio set.
   */
  @Input() direction: DaffRadioSetDirection = DaffRadioSetDirectionEnum.Vertical;

  /**
   * A conditional class that sets the direction of a radio set to be vertical.
   */
  @HostBinding('class.daff-radio-set--vertical') get vertical() {
    return this.direction === DaffRadioSetDirectionEnum.Vertical;
  }

  /**
   * A conditional class that sets the direction of a radio set to be horizontal.
   */
  @HostBinding('class.daff-radio-set--horizontal') get horizontal() {
    return this.direction === DaffRadioSetDirectionEnum.Horizontal;
  }

  @HostBinding('attr.role') role = 'radiogroup';

  /**
   * The list of radios in a radio set.
   */
  @ContentChildren(DaffRadioComponent) radios: QueryList<DaffRadioComponent>;

  /**
   * Implemented as a part of ControlValueAccessor
   */
  onChange: Function;
  /**
   * Implemented as a part of ControlValueAccessor
   */
  onTouched: Function;
  /**
   * The name of the radio-set used to group a set of radios together.
   */
  name: string = 'daff-radio-set' + ++uniqueRadioSetId;
  /**
   * Listens for a focus event and passes focus onto the selected radio.
   */
  @HostListener('focus') onFocus()  {
    this.radios
      .filter(radio => radio.selected)
      .map(radio => radio.focus());
  }

  ngOnInit() {
    if (!this.ngControl) {
      throw new Error('A FormControl is required for the daff-radio-set');
    }
  }

  ngAfterContentInit() {
    this.radios.forEach((radio) => {
      radio.changed.subscribe((value) => this.onRadioSelected(value));
      radio.name = this.name;
    });

    setTimeout(() => {
      this.writeValue(this.ngControl.value);
    });
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

  /**
   * Implemented as a part of the ControlValueAccessor
   */
  writeValue(value: string): void {
    if (!this.radios) {
      return;
    }

    this.radios.map(radio => radio.selected = radio.value === value);
  }

  private onRadioSelected(radioValue: string) {
    this.writeValue(radioValue);
    this.onChange(radioValue);
  }
}
