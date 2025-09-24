import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffButtonModule } from '@daffodil/design/button';
import { DaffFormFieldModule } from '@daffodil/design/form-field';
import { DaffInputModule } from '@daffodil/design/input';

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
