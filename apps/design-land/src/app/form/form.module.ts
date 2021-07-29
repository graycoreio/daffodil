import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  DaffInputModule,
  DaffFormFieldModule,
  DaffButtonModule,
} from '@daffodil/design';

import { DesignLandFormRoutingModule } from './form-routing.module';
import { DesignLandFormComponent } from './form.component';

@NgModule({
  declarations: [
    DesignLandFormComponent,
  ],
  imports: [
    CommonModule,
    DaffInputModule,
    DaffFormFieldModule,
    DesignLandFormRoutingModule,
    ReactiveFormsModule,
    DaffButtonModule,
  ],
})
export class DesignLandFormModule { }
