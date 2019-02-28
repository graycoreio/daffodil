import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AddressFormComponent } from './components/address-form/address-form.component';
import { DaffInputModule, DaffNativeSelectModule, DaffFormFieldModule } from '@daffodil/design';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffInputModule,
    DaffNativeSelectModule,
    DaffFormFieldModule
  ],
  declarations: [
    AddressFormComponent
  ],
  exports: [
    AddressFormComponent
  ]
})
export class AddressFormModule { }
