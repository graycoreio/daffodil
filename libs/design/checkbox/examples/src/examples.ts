import { provideDaffDocsExampleComponents } from '@daffodil/documentation';

import { BasicCheckboxComponent } from './basic-checkbox/basic-checkbox.component';
import { CheckboxSetComponent } from './checkbox-set/checkbox-set.component';




export const CHECKBOX_EXAMPLES = [
  CheckboxSetComponent,
  BasicCheckboxComponent,
];

export const provideDaffDesignCheckboxExamples = () =>
  provideDaffDocsExampleComponents(...CHECKBOX_EXAMPLES);

