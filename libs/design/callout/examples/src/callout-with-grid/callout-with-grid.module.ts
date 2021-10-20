import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  DaffCalloutModule,
  DaffContainerModule,
  DaffButtonModule,
} from '@daffodil/design';

import { CalloutWithGridComponent } from './callout-with-grid.component';

@NgModule({
  declarations: [
    CalloutWithGridComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffCalloutModule,
    DaffContainerModule,
    DaffButtonModule,
    FontAwesomeModule,
  ],
})
export class CalloutWithGridModule { }
