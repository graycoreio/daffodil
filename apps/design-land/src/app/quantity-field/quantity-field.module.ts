import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DesignLandQuantityFieldComponent } from './quantity-field.component';
import { DesignLandQuantityFieldRoutingModule } from './quantity-field-routing.module';
import {
  DaffArticleModule,
  DaffQuantityFieldModule,
  DaffFormFieldModule
} from '@daffodil/design';

@NgModule({
  declarations: [
    DesignLandQuantityFieldComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffArticleModule,
    DaffFormFieldModule,
    DaffQuantityFieldModule,
    DesignLandQuantityFieldRoutingModule
  ]
})
export class DesignLandQuantityFieldModule { }
