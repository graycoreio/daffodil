import {
  Directive,
  HostBinding,
} from '@angular/core';

/**
 * The `DaffArticleEncapsulatedDirective` is used to encapsulate custom components
 * within an article, preventing article styles from bleeding into the component.
 *
 * ## Example
 *
 * ```html
 * <my-custom-component daffArticleEncapsulated></my-custom-component>
 * ```
 *
 * This directive will apply the `daff-ae` class to your component, ensuring that it is encapsulated
 * from the article's styles.
 */
@Directive({
  selector: '[daffArticleEncapsulated]',
  standalone: true,
})
export class DaffArticleEncapsulatedDirective {
  @HostBinding('class.daff-ae') class = true;
}
