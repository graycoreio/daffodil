import { NgModule } from '@angular/core';

import { DaffAccordionModule } from '@daffodil/design';

import { NavAccordionComponent } from './nav-accordion.component';


@NgModule({
  declarations: [
    NavAccordionComponent,
  ],
  exports: [
    NavAccordionComponent,
  ],
  imports: [
    DaffAccordionModule,
  ],
})
export class NavAccordionModule { }
