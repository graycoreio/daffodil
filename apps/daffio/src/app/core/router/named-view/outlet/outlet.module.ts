import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffioRouterNamedViewOutletDirective } from './outlet.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    DaffioRouterNamedViewOutletDirective,
  ],
  exports: [
    DaffioRouterNamedViewOutletDirective,
  ],
})
export class DaffioRouterNamedViewOutletModule {}
