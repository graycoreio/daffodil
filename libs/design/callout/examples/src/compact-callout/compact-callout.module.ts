import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  DaffButtonModule,
  DaffCalloutModule,
  DaffContainerModule,
} from '@daffodil/design';

import { CompactCalloutComponent } from './compact-callout.component';

@NgModule({
  declarations: [
    CompactCalloutComponent,
  ],
  imports: [
    CommonModule,

    DaffCalloutModule,
    DaffContainerModule,
    DaffButtonModule,
    FontAwesomeModule,
  ],
})
export class CompactCalloutModule { }
