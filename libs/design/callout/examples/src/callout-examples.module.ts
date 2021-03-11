import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffCalloutModule } from '@daffodil/design';

import { CALLOUT_EXAMPLES } from './examples';

@NgModule({
  declarations: [
    ...CALLOUT_EXAMPLES,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffCalloutModule,
  ],
  entryComponents: [
    ...CALLOUT_EXAMPLES,
  ],
})
export class CalloutExamplesModule { }
