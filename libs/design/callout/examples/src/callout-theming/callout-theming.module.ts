import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffCalloutModule } from '@daffodil/design';

import { CalloutThemingComponent } from './callout-theming.component';

@NgModule({
  declarations: [
    CalloutThemingComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffCalloutModule,
  ],
})
export class CalloutThemingModule { }
