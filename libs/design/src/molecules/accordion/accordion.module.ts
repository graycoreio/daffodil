import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffPrefixSuffixModule } from '../../core/prefix-suffix/prefix-suffix.module';
import { DaffAccordionItemContentDirective } from './accordion-item-content/accordion-item-content.directive';
import { DaffAccordionItemTitleDirective } from './accordion-item-title/accordion-item-title.directive';
import { DaffAccordionItemComponent } from './accordion-item/accordion-item.component';
import { DaffAccordionComponent } from './accordion/accordion.component';

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
