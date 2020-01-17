import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  DaffCheckboxModule,
  DaffCheckboxSetModule,
  DaffFormFieldModule
} from '@daffodil/design';

import { DocsCheckboxSetComponent } from './checkbox-set.component';
import { DocsCheckboxSetRoutingModule } from './checkbox-set-routing.module';

@NgModule({
  declarations: [
    DocsCheckboxSetComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DocsCheckboxSetRoutingModule,

    DaffCheckboxModule,
    DaffCheckboxSetModule,
    DaffFormFieldModule
  ]
})
export class DocsCheckboxSetModule { }
