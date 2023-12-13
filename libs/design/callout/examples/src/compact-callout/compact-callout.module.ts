import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  DaffCalloutModule,
  DaffContainerModule,
} from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design/button';

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
