import { NgModule } from '@angular/core';

import { DaffLoadingIconModule } from '@daffodil/design/loading-icon';

import { LoadingIconDiameterComponent } from './loading-icon-diameter.component';


@NgModule({
  declarations: [
    LoadingIconDiameterComponent,
  ],
  exports: [
    LoadingIconDiameterComponent,
  ],
  imports: [
    DaffLoadingIconModule,
  ],
})
export class LoadingIconDiameterModule { }
