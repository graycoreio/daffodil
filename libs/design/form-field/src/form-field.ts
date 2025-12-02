import {
  DaffPrefixDirective,
  DaffSuffixDirective,
  DaffFormLabelDirective,
} from '@daffodil/design';
import {
  DaffErrorMessageComponent,
  DaffFormFieldLabelDirective,
  DaffHintComponent,
} from '@daffodil/design/form';

import { DaffFormFieldActionDirective } from './action/action.directive';
import { DaffFormFieldComponent } from './form-field/form-field.component';

/**
 * @docs-private
 */
export const DAFF_FORM_FIELD_COMPONENTS = <const> [
  DaffFormFieldComponent,
  DaffFormLabelDirective,
  DaffPrefixDirective,
  DaffSuffixDirective,
  DaffFormFieldActionDirective,
  DaffHintComponent,
  DaffFormFieldLabelDirective,
  DaffErrorMessageComponent,
];
