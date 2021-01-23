import { NgModule } from '@angular/core';

import { LoadingIconColorComponent } from './loading-icon-color.component';

import { DaffLoadingIconModule, DaffRadioModule } from '@daffodil/design';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoadingIconColorComponent
  ],
  exports: [
    LoadingIconColorComponent
  ],
  imports: [
    DaffLoadingIconModule,
    DaffRadioModule,
    ReactiveFormsModule
  ]
})
export class LoadingIconColorModule { }