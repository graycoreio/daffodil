import { Directive } from '@angular/core';

import {
  DaffSizableDirective,
  DaffSizeLargeType,
  DaffSizeMediumType,
  DaffSizeSmallType,
} from '@daffodil/design';

/**
 * The size types that the DaffButtonComponent can implement.
 */
export type DaffButtonSize = DaffSizeSmallType | DaffSizeMediumType | DaffSizeLargeType;

@Directive({
  standalone: true,
})

export class DaffButtonSizableDirective extends DaffSizableDirective<DaffButtonSize> {}

