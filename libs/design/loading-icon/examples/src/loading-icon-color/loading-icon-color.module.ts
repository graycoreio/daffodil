import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffRadioModule } from '@daffodil/design';
import { DaffLoadingIconModule } from '@daffodil/design/loading-icon';

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
