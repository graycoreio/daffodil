import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  DaffInputModule,
  DaffNativeSelectModule,
  DaffFormFieldModule,
} from '@daffodil/design';

import { AddressFormComponent } from './components/address-form/address-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffInputModule,
    DaffNativeSelectModule,
    DaffFormFieldModule,
  ],
  declarations: [
    AddressFormComponent,
  ],
  exports: [
    AddressFormComponent,
  ],
})
export class AddressFormModule { }
