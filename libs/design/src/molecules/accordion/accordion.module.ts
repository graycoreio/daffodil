import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffAccordionComponent } from './accordion/accordion.component';
import { DaffAccordionItemComponent } from './accordion-item/accordion-item.component';
import { DaffAccordionItemTitleDirective } from './accordion-item-title/accordion-item-title.directive';
import { DaffAccordionItemContentDirective } from './accordion-item-content/accordion-item-content.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DaffAccordionComponent,
    DaffAccordionItemComponent,
    DaffAccordionItemTitleDirective,
    DaffAccordionItemContentDirective
  ],
  exports: [
    DaffAccordionComponent,
    DaffAccordionItemComponent,
    DaffAccordionItemTitleDirective,
    DaffAccordionItemContentDirective
  ]
})
export class DaffAccordionModule { }
