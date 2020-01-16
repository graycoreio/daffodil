import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsRadioSetComponent } from './radio-set.component';

import { DocsRadioSetRoutingModule } from './radio-set-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffRadioSetModule } from '@daffodil/design';

@NgModule({
  declarations: [
    DocsRadioSetComponent
  ],
  imports: [
    CommonModule,
    DocsRadioSetRoutingModule,
    ReactiveFormsModule,

    DaffRadioSetModule
  ]
})

export class DocsRadioSetModule { }
