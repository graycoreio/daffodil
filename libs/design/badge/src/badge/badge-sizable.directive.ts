import { Directive } from '@angular/core';

import {
  DaffSizableDirective,
  DaffSizeLargeType,
  DaffSizeMediumType,
  DaffSizeSmallType,
} from '@daffodil/design';

/**
 * The size types that the DaffBadgeComponent can implement.
 */
export type DaffBadgeSize = DaffSizeSmallType | DaffSizeMediumType | DaffSizeLargeType;

@Directive({})

export class DaffBadgeSizableDirective extends DaffSizableDirective<DaffBadgeSize> {
  /**
   * @docs-private
   */
  defaultSize: DaffBadgeSize;
}

