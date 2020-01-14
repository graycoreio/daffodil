import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DocsFormFieldComponent } from './form-field.component';
import { DocsFormFieldRoutingModule } from './form-field-routing.module';

import {
  DaffFormFieldModule,
  DaffInputModule
} from '@daffodil/design';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    DocsFormFieldComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DocsFormFieldRoutingModule,
    DaffFormFieldModule,
    DaffInputModule,
    FontAwesomeModule
  ]
})

export class DocsFormFieldModule {}
