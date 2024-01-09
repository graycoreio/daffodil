import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffRouterNamedViewOutletDirective } from './outlet.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    DaffRouterNamedViewOutletDirective,
  ],
  exports: [
    DaffRouterNamedViewOutletDirective,
  ],
})
export class DaffRouterNamedViewOutletModule {}
