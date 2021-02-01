import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  DaffLoadingIconModule,
  DaffRadioModule,
} from '@daffodil/design';

import { LoadingIconColorComponent } from './loading-icon-color.component';


@NgModule({
  declarations: [
    LoadingIconColorComponent,
  ],
  exports: [
    LoadingIconColorComponent,
  ],
  imports: [
    DaffLoadingIconModule,
    DaffRadioModule,
    ReactiveFormsModule,
  ],
})
export class LoadingIconColorModule { }
