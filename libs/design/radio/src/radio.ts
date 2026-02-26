import {
  DaffErrorMessageComponent,
  DaffFormFieldLabelDirective,
  DaffHintComponent,
} from '@daffodil/design/form';

import { DaffRadioComponent } from './radio/radio.component';
import { DaffRadioSetComponent } from './radio-set/radio-set.component';
/**
 * @docs-private
 */
export const DAFF_RADIO_COMPONENTS = <const> [
  DaffRadioComponent,
  DaffRadioSetComponent,
  DaffFormFieldLabelDirective,
  DaffHintComponent,
  DaffErrorMessageComponent,
];
