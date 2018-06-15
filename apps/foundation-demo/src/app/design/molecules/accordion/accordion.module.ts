import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { AccordionItemTitleComponent } from './accordion-item-title/accordion-item-title.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AccordionComponent,
    AccordionItemComponent,
    AccordionItemTitleComponent
  ],
  exports: [
    AccordionComponent,
    AccordionItemComponent,
    AccordionItemTitleComponent
  ]
})
export class AccordionModule { }
