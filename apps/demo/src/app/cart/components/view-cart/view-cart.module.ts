import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewCartComponent } from './view-cart.component';
import { DaffButtonModule } from '@daffodil/design';

@NgModule({
  imports: [
    CommonModule,
    DaffButtonModule
  ],
  declarations: [
    ViewCartComponent
  ],
  exports: [
    ViewCartComponent
  ]
})
export class ViewCartModule { }
