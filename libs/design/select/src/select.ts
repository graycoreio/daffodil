import {
  DaffErrorMessageModule,
  DaffFormLabelModule,
} from '@daffodil/design';

import { DaffSelectOptionDirective } from './option/option.directive';
import { DaffSelectComponent } from './select/select.component';

export const DAFF_SELECT_COMPONENTS = <const> [
  DaffSelectComponent,
  DaffSelectOptionDirective,
  DaffErrorMessageModule,
  DaffFormLabelModule,
];
