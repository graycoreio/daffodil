import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffAccordionComponent } from './accordion/accordion/accordion.component';
import { DaffAccordionItemComponent } from './accordion/accordion-item/accordion-item.component';
import { DaffAccordionItemTitleDirective } from './accordion/accordion-item-title/accordion-item-title.directive';

/**
 * @deprecated in favor of {@link DAFF_ACCORDION_COMPONENTS}. Deprecated in version 0.78.0. Will be removed in version 1.0.0.
 */
@NgModule({
  imports: [
    CommonModule,
    DaffAccordionComponent,
    DaffAccordionItemComponent,
    DaffAccordionItemTitleDirective,
  ],
  exports: [
    DaffAccordionComponent,
    DaffAccordionItemComponent,
    DaffAccordionItemTitleDirective,
  ],
})
export class DaffAccordionModule { }
