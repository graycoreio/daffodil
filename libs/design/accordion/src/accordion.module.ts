import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffPrefixSuffixModule } from '@daffodil/design';

import { DaffAccordionComponent } from './accordion/accordion/accordion.component';
import { DaffAccordionItemComponent } from './accordion/accordion-item/accordion-item.component';
import { DaffAccordionItemContentDirective } from './accordion/accordion-item-content/accordion-item-content.directive';
import { DaffAccordionItemTitleDirective } from './accordion/accordion-item-title/accordion-item-title.directive';

@NgModule({
  imports: [
    CommonModule,

    FontAwesomeModule,
    DaffPrefixSuffixModule,
  ],
  declarations: [
    DaffAccordionComponent,
    DaffAccordionItemComponent,
    DaffAccordionItemTitleDirective,
    DaffAccordionItemContentDirective,
  ],
  exports: [
    DaffAccordionComponent,
    DaffAccordionItemComponent,
    DaffAccordionItemTitleDirective,
    DaffAccordionItemContentDirective,
  ],
})
export class DaffAccordionModule { }
