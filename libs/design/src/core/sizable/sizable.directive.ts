import {
  Directive,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import {
  DaffSizable,
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
  host: {
    '[class.daff-xs]': 'size === "xs"',
    '[class.daff-sm]': 'size === "sm"',
    '[class.daff-md]': 'size === "md"',
    '[class.daff-lg]': 'size === "lg"',
    '[class.daff-xl]': 'size === "xl"',
  },
})
export class DaffSizableDirective<T extends DaffSizeAllType> implements DaffSizable<T>, OnChanges, OnInit {
  /**
   * The size of the component.
   */
  @Input() size: T;

  /**
   * Sets a default size.
   *
   * @example
   * ```ts
   * constructor(private sizableDirective: DaffSizableDirective) {
   *  this.sizableDirective.defaultSize = 'md';
   * }
   * ```
   */
  public defaultSize: T;

  /**
   * @docs-private
   */
  ngOnChanges(changes: SimpleChanges) {
    if(!changes.size?.currentValue) {
      this.size = this.defaultSize;
    }
  }

  /**
   * @docs-private
   */
  ngOnInit() {
    if(!this.size) {
      this.size = this.defaultSize;
    }
  }
}

