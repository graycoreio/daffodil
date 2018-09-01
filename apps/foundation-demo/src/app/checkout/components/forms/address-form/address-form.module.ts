import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AddressFormComponent } from './components/address-form/address-form.component';
import { DesignModule } from '../../../../design/design.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DesignModule
  ],
  declarations: [
    AddressFormComponent
  ],
  exports: [
    AddressFormComponent
  ]
})
export class AddressFormModule { }
