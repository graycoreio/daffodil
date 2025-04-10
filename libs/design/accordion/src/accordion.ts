import { DaffAccordionComponent } from './accordion/accordion/accordion.component';
import { DaffAccordionItemComponent } from './accordion/accordion-item/accordion-item.component';
import { DaffAccordionItemTitleDirective } from './accordion/accordion-item-title/accordion-item-title.directive';

/**
 * @docs-private
 *
 * `DAFF_ACCORDION_COMPONENTS` imports all the available components and directives related to the component.
 */
export const DAFF_ACCORDION_COMPONENTS = <const> [
  DaffAccordionComponent,
  DaffAccordionItemComponent,
  DaffAccordionItemTitleDirective,
];
