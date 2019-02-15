import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignLandFormRoutingModule } from './form-routing.module';

import { FormComponent } from './form.component';
import { DaffInputModule, DaffFormFieldModule, DaffFormCoreModule, DaffButtonModule } from '@daffodil/design';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    DaffInputModule,
    DaffFormFieldModule,
    DaffFormCoreModule,
    DesignLandFormRoutingModule,
    ReactiveFormsModule,
    DaffButtonModule
  ]
})
export class FormModule { }
