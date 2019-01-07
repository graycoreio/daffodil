import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AddressFormComponent } from './components/address-form/address-form.component';
import { DaffInputModule, DaffSelectValidatorModule } from '@daffodil/design';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffInputModule,
    DaffSelectValidatorModule
  ],
  declarations: [
    AddressFormComponent
  ],
  exports: [
    AddressFormComponent
  ]
})
export class AddressFormModule { }
