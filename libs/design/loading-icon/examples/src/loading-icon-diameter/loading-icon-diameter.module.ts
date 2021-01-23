import { NgModule } from '@angular/core';

import { LoadingIconDiameterComponent } from './loading-icon-diameter.component';

import { DaffLoadingIconModule } from '@daffodil/design';

@NgModule({
  declarations: [
    LoadingIconDiameterComponent
  ],
  exports: [
    LoadingIconDiameterComponent
  ],
  imports: [
    DaffLoadingIconModule
  ]
})
export class LoadingIconDiameterModule { }