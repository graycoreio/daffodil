import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffAccordionModule } from '@daffodil/design/accordion';

import { ACCORDION_EXAMPLES } from './examples';

@NgModule({
  declarations: [
    ...ACCORDION_EXAMPLES,
  ],
  imports: [
    CommonModule,
    DaffAccordionModule,
  ],
})
export class AccordionExamplesModule { }
