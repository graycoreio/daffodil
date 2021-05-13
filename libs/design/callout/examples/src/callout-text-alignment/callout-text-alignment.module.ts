import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  DaffCalloutModule,
  DaffContainerModule,
  DaffAccordionModule,
} from '@daffodil/design';

import { CalloutTextAlignmentComponent } from './callout-text-alignment.component';

@NgModule({
  declarations: [
    CalloutTextAlignmentComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffCalloutModule,
    DaffContainerModule,
    DaffAccordionModule,
  ],
})
export class CalloutTextAlignmentModule { }
