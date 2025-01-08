import {
  Directive,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import {
  DaffSizable,
  DaffSizableEnum,
  DaffSizeAllType,
} from './sizable';

/**
 * `DaffSizableDirective` allows for dynamic sizing of a component by setting
 * CSS classes based on the specified size.
 *
 * @example Implementing it as an attribute directive
 *
 * ```html
 * <div daffSizable [size]="small">Sized content</div>
 * ```
 * In this example, the `daff-small` class is applied to the `div` element, allowing you to
 * use the class to style the `div`.
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
 *      directive: DaffSizableDirective,
 *      inputs: ['size'],
 *    },
 *  ],
 * })
 * export class CustomComponent { }
 * ```
 *
 * ```scss
 * :host {
 *  &.daff-sm {
 *    width: 24px;
 *  }
 *
 *  &.daff-md {
 *    width: 32px;
 *  }
 * }
 * ```
 *
 * The directive applies the following CSS classes to the component based on the size:
 *
 * - `daff-xs`: Applied when the size is `xs`.
 * - `daff-sm`: Applied when the size is `sm`.
 * - `daff-md`: Applied when the size is `md`.
 * - `daff-lg`: Applied when the size is `lg`.
 * - `daff-xl`: Applied when the size is `xl`.
 */
@Directive({
  selector: '[daffSizable]',
  standalone: true,
})
export class DaffSizableDirective<T extends DaffSizeAllType> implements DaffSizable<T>, OnChanges, OnInit {

  /**
   * Dynamically sets the CSS classes based on the size.
   * @docs-private
   */
  @HostBinding('class') get class() {
    return {
      'daff-xs': this.size === DaffSizableEnum.XSmall,
      'daff-sm': this.size === DaffSizableEnum.Small,
      'daff-md': this.size === DaffSizableEnum.Medium,
      'daff-lg': this.size === DaffSizableEnum.Large,
      'daff-xl': this.size === DaffSizableEnum.XLarge,
    };
  }

  /**
   * The size of a component.
   */
  @Input() size: T;

  /**
   * Sets a default size when no size is provided.
   */
  public defaultSize: T;

  ngOnChanges(changes: SimpleChanges) {
    if(!changes.size?.currentValue) {
      this.size = this.defaultSize;
    }
  }

  ngOnInit() {
    if(!this.size) {
      this.size = this.defaultSize;
    }
  }
}

