import {
  Directive,
  HostBinding,
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

const orientationtValues = (orientationt: string) => (<any>Object).values(DaffOrientationEnum).includes(orientationt);

const validateOrientation = (orientationt: string) => {
  if(isDevMode()) {
    if(orientationt !== undefined && !orientationtValues(orientationt)) {
      console.warn(`'${orientationt}' is not a valid value of the orientationt property. The available values are: left, center, or right.`);
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
 *  standalone: true,
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
})
export class DaffOrientableDirective implements DaffOrientable, OnChanges, OnInit {

  /**
   * @docs-private
   */
  @HostBinding('class') get class() {
    return {
      'daff-horizontal': this.orientation === DaffOrientationEnum.Horizontal,
      'daff-vertical': this.orientation === DaffOrientationEnum.Vertical,
    };
  }

  /**
   * The orientation of the component.
   *
   * Options are: `horizontal` and `vertical`.
   */
  @Input() orientation: DaffOrientation = 'vertical';

  /**
   * Sets a default orientation.
   */
  public defaultOrientation: DaffOrientation;

  /**
   * @docs-private
   */
  ngOnInit() {
    validateOrientation(this.orientation);

    if (this.orientation !== this.defaultOrientation && this.defaultOrientation) {
      this.orientation = this.defaultOrientation;
    }
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

