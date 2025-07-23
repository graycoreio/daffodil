/* eslint-disable quote-props */
import { Directive } from '@angular/core';

/**
 * Used to provide a high level overview of the panel content. It should be wrapped by a `<daff-accordion-item>`.
 *
 * @example
 * ```html
 * <div daffAccordionItemTitle>Title</div>
 * ```
 */
@Directive({
  selector: '[daffAccordionItemTitle]',
  host: {
    'class': 'daff-accordion-item__title',
  },
})
export class DaffAccordionItemTitleDirective {}
