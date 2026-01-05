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
 * `DaffOrientableDirective` allows for dynamic orientation of a component by
 * setting CSS classes based on the specified orientation. This directive is
 * useful when orientation needs to be managed dynamically in an Angular component.
 *
 * @example Implementing it as an attribute directive
 *
 * ```html
 * <div daffOrientable [orientation]="horizontal"></div>
 * ```
 *
 * In this example, the `daff-horizontal` class is added to the `div` element, allowing
 * you to style the `div` as you wish using the class.
 *
 * @example Implementing it as an Angular host directive
 *
 * ```ts
 * @Component({
 *  selector: 'custom-component',
 *  template: 'custom-component.html',
 *  hostDirectives: [
 *    {
 *      directive: DaffOrientableDirective,
 *      inputs: ['orientation'],
 *    },
 *  ],
 * })
 * export class CustomComponent { }
 * ```
 *
 * ```scss
 * .custom-component {
 *   &.daff-vertical {
 *     display: flex;
 *     flex-direction: column;
 *  }
 * }
 * ```
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
   *
   * Options are: `horizontal` and `vertical`.
   */
  @Input() orientation: DaffOrientation;

  /**
   * Sets a default orientation.
   *
   * @example
   * ```ts
   * constructor(private orientableDirective: DaffOrientableDirective) {
   *  this.orientableDirective.defaultOrientation = 'horizontal';
   * }
   * ```
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

