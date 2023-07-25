import { NgModule } from '@angular/core';

import {
  DaffNavbarModule,
  DaffSidebarModule,
} from '@daffodil/design';

import { TwoFixedSidebarsEitherSideComponent } from './two-fixed-sidebars-either-side.component';

@NgModule({
  imports: [
    DaffSidebarModule,
    DaffNavbarModule,
  ],
  declarations: [
    TwoFixedSidebarsEitherSideComponent,
  ],
  exports: [
    TwoFixedSidebarsEitherSideComponent,
  ],
})
export class TwoFixedSidebarsEitherSideModule { }

