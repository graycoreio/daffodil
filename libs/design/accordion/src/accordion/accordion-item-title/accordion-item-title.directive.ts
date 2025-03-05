import {
  Directive,
  HostBinding,
} from '@angular/core';

/**
 * Used to provide a high level overview of the content. It should be wrapped by a `<daff-accordion-item>`.
 */
@Directive({
  selector: '[daffAccordionItemTitle]',
})
export class DaffAccordionItemTitleDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-accordion-item__title') class = true;
}
