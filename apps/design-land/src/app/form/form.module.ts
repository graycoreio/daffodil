import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffInputModule } from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design/button';
import { DaffFormFieldModule } from '@daffodil/design/forms/form-field';

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
