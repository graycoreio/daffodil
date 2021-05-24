import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignLandTextAreaRoutingModule } from './text-area-routing.module';

import { DesignLandTextAreaComponent } from './text-area.component';
import {
  DaffTextareaModule,
  DaffFormFieldModule,
  DaffButtonModule,
	DaffInputModule,
} from '@daffodil/design';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DesignLandTextAreaComponent,
  ],
  imports: [
    CommonModule,
		DaffTextareaModule,
		DaffInputModule,
    DaffFormFieldModule,
    DesignLandTextAreaRoutingModule,
    ReactiveFormsModule,
    DaffButtonModule,
  ],
})
export class DesignLandTextAreaModule { }
