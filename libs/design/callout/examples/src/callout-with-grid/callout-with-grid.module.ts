import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffCalloutModule } from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design/button';
import { DaffContainerModule } from '@daffodil/design/container';

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
