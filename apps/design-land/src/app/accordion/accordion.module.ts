import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionComponent } from './accordion.component';
import { DesignLandAccordionRoutingModule } from './accordion-routing.module';

import { DaffAccordionModule } from '@daffodil/design';


@NgModule({
  declarations: [
    AccordionComponent
  ],
  imports: [
    CommonModule,
    DesignLandAccordionRoutingModule,

    DaffAccordionModule
  ]
})
export class AccordionModule { }
