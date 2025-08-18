import { Signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidatorFn,
} from '@angular/forms';

new FormControl();

export interface DynamicFormInput {
  id: string;
  type: string | 'input' | 'select' | 'native-select' | 'textarea';
  validators?: ValidatorFn | null;
  disabled?: <G extends FormGroup>(group: G) => boolean | null;
  visible?: <G extends FormGroup>(group: G) => boolean | null;
  value: Signal<any>;
  context?: unknown;
}

export interface DynamicFormGroup {
  id: string;
  type: 'group';
  label: string;
  children: DynamicFormGroup[];
  validators?: ValidatorFn | null;
  disabled?: <G extends FormGroup>(group: G) => boolean | null;
  visible?: <G extends FormGroup>(group: G) => boolean | null;
}

export type DynamicFormElement = DynamicFormInput | DynamicFormGroup;
