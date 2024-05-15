import {
  Directive,
  HostBinding,
} from '@angular/core';

/**
 * @deprecated in v1.0.0
 */
@Directive({
  selector: '[daffAccordionItemContent]',
})
export class DaffAccordionItemContentDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-accordion-item__content') class = true;
}
