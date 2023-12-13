import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffButtonModule } from '@daffodil/design/button';

import { ViewCartDirective } from './view-cart.directive';

@NgModule({
  imports: [
    CommonModule,
    DaffButtonModule,
  ],
  declarations: [
    ViewCartDirective,
  ],
  exports: [
    ViewCartDirective,
  ],
})
export class ViewCartModule { }
