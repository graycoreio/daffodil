import { DaffFormFieldComponent } from './form-field/form-field.component';
import { DaffPrefixDirective } from '../../../core/prefix-suffix/prefix.directive';
import { DaffSuffixDirective } from '../../../core/prefix-suffix/suffix.directive';
import { DaffErrorMessageComponent } from '../error-message/error-message.component';
import { DaffFormLabelModule } from '../form-label/form-label.module';
import { DaffHintComponent } from '../hint/hint.component';

/**
 * @docs-private
 */
export const DAFF_FORM_FIELD_COMPONENTS = <const> [
  DaffFormFieldComponent,
  DaffErrorMessageComponent,
  DaffFormLabelModule,
  DaffHintComponent,
  DaffPrefixDirective,
  DaffSuffixDirective,
];
