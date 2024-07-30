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
 * The `DaffTextAlignableDirective` allows for dynamic text alignment of a component
 * by setting CSS classes based on the specified text alignment. This directive is
 * useful when text alignment needs to be managed dynamically in an Angular component.
 *
 * ## Example
 *
 * ```html
 * <div daffTextAlignable textAlignment="center">Aligned text</div>
 * ```
 *
 * ## Why not just use CSS?
 *
 * While the native CSS `text-align` property can be used for static text alignment,
 * the `DaffTextAlignableDirective` provides a structured and consistent way to handle
 * dynamic text alignment within Angular components in more complex use-cases
 * application of `text-align:center` would cause unexpected side effects.
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

