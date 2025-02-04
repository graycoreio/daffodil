import {
  Input,
  Directive,
  HostBinding,
} from '@angular/core';

import {
  DaffArticleEncapsulatedDirective,
  DaffColorableDirective,
} from '@daffodil/design';

/**
 * This attribute determines what orientation the the card contents are stacked.
 */
export type DaffCardOrientation = 'vertical' | 'horizontal';
export enum DaffCardOrientationEnum {
  Vertical = 'vertical',
  Horizontal = 'horizontal',
}

@Directive({
  selector: '[daffCardBase]',
  hostDirectives: [
    { directive: DaffArticleEncapsulatedDirective },
    {
      directive: DaffColorableDirective,
      inputs: ['color'],
    },
  ],
})
export class DaffCardBaseDirective {
  private _orientation: DaffCardOrientation = DaffCardOrientationEnum.Vertical;

  @Input()
  get orientation() {
    return this._orientation;
  }

  set orientation(value: DaffCardOrientation) {
    if(value === null || value === undefined || <unknown>value === '') {
      this._orientation = DaffCardOrientationEnum.Vertical;
    } else {
      this._orientation = value;
    }
  };

  /**
   * @docs-private
   */
  @HostBinding('class.vertical') get verticalClass() {
    return this.orientation === DaffCardOrientationEnum.Vertical;
  }

  /**
   * @docs-private
   */
  @HostBinding('class.horizontal') get horizontalClass() {
    return this.orientation === DaffCardOrientationEnum.Horizontal;
  }
}
