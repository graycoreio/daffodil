import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewCartDirective } from './view-cart.directive';
import { DaffButtonModule } from '@daffodil/design';

@NgModule({
  imports: [
    CommonModule,
    DaffButtonModule
  ],
  declarations: [
    ViewCartDirective
  ],
  exports: [
    ViewCartDirective
  ]
})
export class ViewCartModule { }
