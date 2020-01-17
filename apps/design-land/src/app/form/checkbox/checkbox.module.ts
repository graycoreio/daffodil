import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffCheckboxModule } from '@daffodil/design';

import { DocsCheckboxComponent } from './checkbox.component';
import { DocsCheckboxRoutingModule } from './checkbox-routing.module';

@NgModule({
  declarations: [
    DocsCheckboxComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DocsCheckboxRoutingModule,

    DaffCheckboxModule
  ]
})

export class DocsCheckboxModule { }
