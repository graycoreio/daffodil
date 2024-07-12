import { provideDaffDocsExampleComponents } from '@daffodil/documentation';

import { BasicInputComponent } from './basic-input/basic-input.component';
import { InputDisabledComponent } from './input-disabled/input-disabled.component';
import { InputErrorComponent } from './input-error/input-error.component';
import { InputWithFormFieldComponent } from './input-with-form-field/input-with-form-field.component';



export const INPUT_EXAMPLES = [
  BasicInputComponent,
  InputWithFormFieldComponent,
  InputDisabledComponent,
  InputErrorComponent,
];

export const provideDaffDesignInputExamples = () =>
  provideDaffDocsExampleComponents(...INPUT_EXAMPLES);
