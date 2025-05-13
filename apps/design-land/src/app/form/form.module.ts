import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffFormFieldModule } from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design/button';
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
