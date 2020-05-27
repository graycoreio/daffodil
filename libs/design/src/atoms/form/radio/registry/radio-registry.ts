import { Injectable } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DaffRadioControlValueAccessorDirective } from '../cva/radio-cva.directive';

export interface ControlAccessorPair {
  control: NgControl;
  accessor: DaffRadioControlValueAccessorDirective;
}

@Injectable()
export class DaffRadioRegistry {
  private _accessors: ControlAccessorPair[] = [];

  /**
   * @description
   * Adds a control to the internal registry.
   */
  add(control: NgControl, accessor: DaffRadioControlValueAccessorDirective) {
    this._accessors.push({
      control: control,
      accessor: accessor
    });
  }

  /**
   * @description
   * Removes a control from the internal registry.
   */
  remove(accessor: DaffRadioControlValueAccessorDirective) {
    for (let i = this._accessors.length - 1; i >= 0; --i) {
      if (this._accessors[i]['accessor'] === accessor) {
        this._accessors.splice(i, 1);
        return;
      }
    }
  }

  /**
   * @description
   * Selects a radio button.
   */
  select(accessor: DaffRadioControlValueAccessorDirective) {
    this._accessors.forEach((c) => {
      if (this._isSameGroup(c, accessor) && c['accessor'] !== accessor) {
        c['accessor'].fireDeselect();
      }
    });
  }

  private _isSameGroup (
      controlPair: ControlAccessorPair,
      accessor: DaffRadioControlValueAccessorDirective): boolean {
    if (!controlPair['control'].control) {
      return false;
    }
    return controlPair['control'].control.parent === accessor._control.control.parent
      && controlPair['accessor'].name === accessor.name;
  }
}
