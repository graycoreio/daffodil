import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  DaffButtonModule,
  DaffCalloutModule,
} from '@daffodil/design';

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
