import {
  DaffPrefixDirective,
  DaffSuffixDirective,
} from '@daffodil/design';

import { DaffButtonComponent } from './button/basic/button.component';
import { DaffFlatButtonComponent } from './button/flat/flat.component';
import { DaffIconButtonComponent } from './button/icon/icon.component';
import { DaffRaisedButtonComponent } from './button/raised/raised.component';
import { DaffStrokedButtonComponent } from './button/stroked/stroked.component';
import { DaffUnderlineButtonComponent } from './button/underline/underline.component';

/**
 * @docs-private
 */
export const DAFF_BUTTON_COMPONENTS = <const> [
  DaffButtonComponent,
  DaffFlatButtonComponent,
  DaffIconButtonComponent,
  DaffRaisedButtonComponent,
  DaffStrokedButtonComponent,
  DaffUnderlineButtonComponent,
  DaffPrefixDirective,
  DaffSuffixDirective,
];

/**
 * @docs-private
 */
export const DAFF_BASIC_BUTTON_COMPONENTS = <const> [
  DaffButtonComponent,
  DaffPrefixDirective,
  DaffSuffixDirective,
];

/**
 * @docs-private
 */
export const DAFF_FLAT_BUTTON_COMPONENTS = <const> [
  DaffFlatButtonComponent,
  DaffPrefixDirective,
  DaffSuffixDirective,
];

/**
 * @docs-private
 */
export const DAFF_ICON_BUTTON_COMPONENTS = <const> [
  DaffIconButtonComponent,
  DaffPrefixDirective,
  DaffSuffixDirective,
];

/**
 * @docs-private
 */
export const DAFF_STROKED_BUTTON_COMPONENTS = <const> [
  DaffStrokedButtonComponent,
  DaffPrefixDirective,
  DaffSuffixDirective,
];

/**
 * @docs-private
 */
export const DAFF_UNDERLINE_BUTTON_COMPONENTS = <const> [
  DaffUnderlineButtonComponent,
  DaffPrefixDirective,
  DaffSuffixDirective,
];
