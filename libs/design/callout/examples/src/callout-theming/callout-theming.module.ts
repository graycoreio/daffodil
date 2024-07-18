import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design/button';
import { DaffCalloutModule } from '@daffodil/design/callout';

import { CalloutThemingComponent } from './callout-theming.component';

@NgModule({
  declarations: [
    CalloutThemingComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffCalloutModule,
    DaffButtonModule,
    FontAwesomeModule,
  ],
})
export class CalloutThemingModule { }
