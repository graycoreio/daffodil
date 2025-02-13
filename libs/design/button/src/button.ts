import { DaffPrefixSuffixModule } from '@daffodil/design';

import { DaffButtonComponent } from './button/basic/button.component';
import { DaffFlatButtonComponent } from './button/flat/flat.component';
import { DaffIconButtonComponent } from './button/icon/icon.component';
import { DaffRaisedButtonComponent } from './button/raised/raised.component';
import { DaffStrokedButtonComponent } from './button/stroked/stroked.component';
import { DaffUnderlineButtonComponent } from './button/underline/underline.component';

/**
 * `DAFF_BUTTON_COMPONENTS` imports all the available button types.
 * ```ts
 * import { DAFF_BUTTON_COMPONENTS } from '@daffodil/design/button';
 * ```
 */
export const DAFF_BUTTON_COMPONENTS = <const> [
  DaffButtonComponent,
  DaffFlatButtonComponent,
  DaffIconButtonComponent,
  DaffRaisedButtonComponent,
  DaffStrokedButtonComponent,
  DaffUnderlineButtonComponent,
];
