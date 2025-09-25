import { Directive } from '@angular/core';

import {
  DaffSizableDirective,
  DaffSizeLargeType,
  DaffSizeMediumType,
  DaffSizeSmallType,
} from '@daffodil/design';

/**
 * The size types that the DaffTagComponent can implement.
 */
export type DaffTagSize = DaffSizeSmallType | DaffSizeMediumType | DaffSizeLargeType;

@Directive({})

export class DaffTagSizableDirective extends DaffSizableDirective<DaffTagSize> {}

