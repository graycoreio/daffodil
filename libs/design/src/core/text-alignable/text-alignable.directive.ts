import {
  Directive,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import {
  DaffTextAlignable,
  DaffTextAlignment,
  DaffTextAlignmentEnum,
} from './text-alignable';

/**
 * `DaffTextAlignableDirective` allows for dynamic text alignment of a component by
 * setting CSS classes based on the specified text alignment. This directive is
 * useful when text alignment needs to be managed dynamically in an Angular component.
 *
 * ## Why not just use CSS?
 *
 * While the native CSS `text-align` property can be used for static text alignment,
 * the `DaffTextAlignableDirective` provides a structured and consistent way to handle
 * dynamic text alignment within Angular components in more complex use cases where the
 * application of `text-align: center;` would cause unexpected side effects.
 *
 * @example Implementing it as an attribute directive
 *
 * ```html
 * <div daffTextAlignable textAlignment="center">Aligned text</div>
 * ```
 *
 * In this example, the `daff-center` class is added to the `div` element, allowing
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
 *      directive: DaffTextAlignableDirective,
 *      inputs: ['textAlignment'],
 *    },
 *  ],
 * })
 * export class CustomComponent { }
 * ```
 *
 * ```scss
 * .custom-component {
 *  &.daff-left {
 *    text-align: left;
 *  }
 * }
 * ```
 */
@Directive({
  selector: '[daffTextAlignable]',
  standalone: true,
})
export class DaffTextAlignableDirective implements DaffTextAlignable, OnChanges {

  /**
   * @docs-private
   */
  @HostBinding('class') get class() {
    return {
      'daff-left': this.textAlignment === DaffTextAlignmentEnum.Left,
      'daff-center': this.textAlignment === DaffTextAlignmentEnum.Center,
      'daff-right': this.textAlignment === DaffTextAlignmentEnum.Right,
    };
  }

  /**
   * The text-alignment of a component.
   */
  @Input() textAlignment: DaffTextAlignment;

  /**
   * Sets a default textAlignment.
   */
  public defaultAlignment: DaffTextAlignment;

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.textAlignment?.currentValue) {
      this.textAlignment = this.defaultAlignment;
    }
  }
}

