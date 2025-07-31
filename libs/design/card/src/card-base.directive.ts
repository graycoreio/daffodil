import {
  Input,
  Directive,
} from '@angular/core';

import {
  DaffArticleEncapsulatedDirective,
  DaffColorableDirective,
} from '@daffodil/design';

import {
  DaffCardOrientation,
  DaffCardOrientationEnum,
} from './helpers/card-orientation';

@Directive({
  selector: '[daffCardBase]',
  hostDirectives: [
    { directive: DaffArticleEncapsulatedDirective },
    {
      directive: DaffColorableDirective,
      inputs: ['color'],
    },
  ],
  host: {
    '[class.vertical]': 'orientation === "vertical"',
    '[class.horizontal]': 'orientation === "horizontal"',
    '[class.elevated]': 'elevated',
  },
})
export class DaffCardBaseDirective {
  /**
   * The orientation of a card.
   */
  @Input({ transform: (value: DaffCardOrientation | null | undefined) => value || DaffCardOrientationEnum.Vertical })
  orientation: DaffCardOrientation = DaffCardOrientationEnum.Vertical;

  /**
   * Whether or not a card displays a shadow.
   */
  @Input() elevated = false;
}
