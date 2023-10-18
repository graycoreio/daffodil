import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffAccordionComponent } from './accordion/accordion.component';
import { DaffAccordionItemComponent } from './accordion-item/accordion-item.component';
import { DaffAccordionItemContentDirective } from './accordion-item-content/accordion-item-content.directive';
import { DaffAccordionItemTitleDirective } from './accordion-item-title/accordion-item-title.directive';
import { DaffNavAccordionItemComponent } from './nav-accordion-item/nav-accordion-item.component';
import { DaffPrefixSuffixModule } from '../../core/prefix-suffix/prefix-suffix.module';

@NgModule({
  imports: [
    CommonModule,

    FontAwesomeModule,
    DaffPrefixSuffixModule,
  ],
  declarations: [
    DaffAccordionComponent,
    DaffAccordionItemComponent,
    DaffNavAccordionItemComponent,
    DaffAccordionItemTitleDirective,
    DaffAccordionItemContentDirective,
  ],
  exports: [
    DaffAccordionComponent,
    DaffAccordionItemComponent,
    DaffNavAccordionItemComponent,
    DaffAccordionItemTitleDirective,
    DaffAccordionItemContentDirective,
  ],
})
export class DaffAccordionModule { }
