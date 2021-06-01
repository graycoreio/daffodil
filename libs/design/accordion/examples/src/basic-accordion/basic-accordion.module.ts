import { NgModule } from '@angular/core';

import { DaffAccordionModule } from '@daffodil/design';

import { BasicAccordionComponent } from './basic-accordion.component';


@NgModule({
  declarations: [
    BasicAccordionComponent,
  ],
  exports: [
    BasicAccordionComponent,
  ],
  imports: [
    DaffAccordionModule,
  ],
})
export class BasicAccordionModule { }
