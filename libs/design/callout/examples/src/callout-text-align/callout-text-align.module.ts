import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  DaffCalloutModule,
  DaffContainerModule,
  DaffAccordionModule,
} from '@daffodil/design';

import { CalloutTextAlignComponent } from './callout-text-align.component';

@NgModule({
  declarations: [
    CalloutTextAlignComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffCalloutModule,
    DaffContainerModule,
    DaffAccordionModule,
  ],
})
export class CalloutTextAlignModule { }
