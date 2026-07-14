import {
  Directive,
  input,
} from '@angular/core';

import {
  DaffArticleEncapsulatedDirective,
  DaffColorableDirective,
  DaffOrientableDirective,
} from '@daffodil/design';

@Directive({
  selector: '[daffCardBase]',
  hostDirectives: [
    { directive: DaffArticleEncapsulatedDirective },
    {
      directive: DaffColorableDirective,
      inputs: ['color'],
    },
    {
      directive: DaffOrientableDirective,
      inputs: ['orientation'],
    },
  ],
  host: {
    '[class.elevated]': 'elevated()',
  },
})
export class DaffCardBaseDirective {
  /**
   * Whether or not a card displays a shadow.
   */
  elevated = input(false);

  constructor(private orientation: DaffOrientableDirective) {
    this.orientation.defaultOrientation = 'vertical';
  }
}
