import {
  Directive,
  HostBinding,
} from '@angular/core';

/**
 * `DaffArticleEncapsulatedDirective` is used to encapsulate custom components within an article,
 * preventing {@link DaffArticleComponent } styles from bleeding into the component.
 *
 * @example Implementing it as an attribute directive
 *
 * ```html
 * <my-custom-component daffArticleEncapsulated></my-custom-component>
 * ```
 *
 * @example Implementing it as an Angular host directive
 *
 * ```ts
 * @Component({
 *  standalone: true,
 *  selector: 'custom-component',
 *  template: 'custom-component.html',
 *  hostDirectives: [{ directive: DaffArticleEncapsulatedDirective }],
 * })
 * export class CustomComponent { }
 * ```
 *
 * This directive will apply the `daff-ae` class to the component, ensuring that it is encapsulated from the article's styles.
 */
@Directive({
  selector: '[daffArticleEncapsulated]',
  standalone: true,
})
export class DaffArticleEncapsulatedDirective {
  @HostBinding('class.daff-ae') class = true;
}
