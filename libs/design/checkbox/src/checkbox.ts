import {
  DaffErrorMessageComponent,
  DaffHintComponent,
} from '@daffodil/design/form-field';

import { DaffCheckboxComponent } from './checkbox/checkbox.component';
import { DaffCheckboxSetComponent } from './checkbox-set/checkbox-set.component';
import { DaffCheckboxControlValueAccessorDirective } from './cva/checkbox-cva.directive';
import { DaffCheckboxSetLabelDirective } from './label/label.directive';

/**
 * @docs-private
 */
export const DAFF_CHECKBOX_COMPONENTS = <const> [
  DaffCheckboxComponent,
  DaffCheckboxSetComponent,
  DaffCheckboxControlValueAccessorDirective,
  DaffCheckboxSetLabelDirective,
  DaffHintComponent,
  DaffErrorMessageComponent,
];
