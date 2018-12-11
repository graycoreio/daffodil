import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffAccordionComponent } from './accordion/accordion.component';
import { DaffAccordionItemComponent } from './accordion-item/accordion-item.component';
import { DaffAccordionItemTitleComponent } from './accordion-item-title/accordion-item-title.component';
import { DaffAccordionItemContentComponent } from './accordion-item-content/accordion-item-content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DaffAccordionComponent,
    DaffAccordionItemComponent,
    DaffAccordionItemTitleComponent,
    DaffAccordionItemContentComponent
  ],
  exports: [
    DaffAccordionComponent,
    DaffAccordionItemComponent,
    DaffAccordionItemTitleComponent,
    DaffAccordionItemContentComponent
  ]
})
export class DaffAccordionModule { }
