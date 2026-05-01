import {
  Directive,
  Input,
  isDevMode,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import {
  DaffOrientable,
  DaffOrientation,
  DaffOrientationEnum,
} from './orientable';

const orientationValues = (orientation: string) => (<any>Object).values(DaffOrientationEnum).includes(orientation);

const validateOrientation = (orientation: string) => {
  if(isDevMode()) {
    if(orientation !== undefined && !orientationValues(orientation)) {
      console.warn(`'${orientation}' is not a valid value of the orientation property. The available values are: left, center, or right.`);
    }
  }
};

/**
 * `DaffOrientableDirective`enforces consistent use of orientation across components.
 */
@Directive({
  selector: '[daffOrientable]',
  host: {
    '[class.daff-horizontal]': 'orientation === "horizontal"',
    '[class.daff-vertical]': 'orientation === "vertical"',
  },
})
export class DaffOrientableDirective implements DaffOrientable, OnChanges, OnInit {
  /**
   * The orientation of the component.
   */
  @Input() orientation: DaffOrientation;

  /**
   * The default used when no orientation is set.
   */
  public defaultOrientation: DaffOrientation;

  /**
   * @docs-private
   */
  ngOnInit() {
    if (this.defaultOrientation && !this.orientation) {
      this.orientation = this.defaultOrientation;
    }

    validateOrientation(this.orientation);
  }

  /**
   * @docs-private
   */
  ngOnChanges(changes: SimpleChanges) {
    if (!changes.orientation?.currentValue) {
      this.orientation = this.defaultOrientation;
    }
  }
}

