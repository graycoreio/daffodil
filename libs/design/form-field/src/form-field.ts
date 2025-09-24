import {
  DaffPrefixDirective,
  DaffSuffixDirective,
  DaffFormLabelDirective,
} from '@daffodil/design';

import { DaffFormFieldActionDirective } from './action/action.directive';
import { DaffErrorMessageComponent } from './error-message/error-message.component';
import { DaffFormFieldComponent } from './form-field/form-field.component';
import { DaffHintComponent } from './hint/hint.component';
import { DaffFormFieldLabelDirective } from './label/label.directive';

/**
 * @docs-private
 */
export const DAFF_FORM_FIELD_COMPONENTS = <const> [
  DaffFormFieldComponent,
  DaffErrorMessageComponent,
  DaffFormLabelDirective,
  DaffHintComponent,
  DaffPrefixDirective,
  DaffSuffixDirective,
  DaffFormFieldLabelDirective,
  DaffFormFieldActionDirective,
];
