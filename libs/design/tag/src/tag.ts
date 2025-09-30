import { DaffPrefixDirective } from '@daffodil/design';

import { DaffTagSizableDirective } from './tag/tag-sizeable.directive';
import { DaffTagComponent } from './tag/tag.component';

/**
 * @docs-private
 *
 * `DAFF_TAG_COMPONENTS` imports all the available components and directives.
 */
export const DAFF_TAG_COMPONENTS = <const> [
  DaffTagComponent,
  DaffTagSizableDirective,
  DaffPrefixDirective,
];

