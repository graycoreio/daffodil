import { DaffFormFieldComponent } from './form-field/form-field.component';
import { DaffPrefixDirective } from '../../../core/prefix-suffix/prefix.directive';
import { DaffSuffixDirective } from '../../../core/prefix-suffix/suffix.directive';
import { DaffErrorMessageComponent } from '../error-message/error-message.component';
import { DaffFormLabelDirective } from '../form-label/form-label.directive';
import { DaffHintComponent } from '../hint/hint.component';
import { DaffFormFieldActionDirective } from './action/action.directive';
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
