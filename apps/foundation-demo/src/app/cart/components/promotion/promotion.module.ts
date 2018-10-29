import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionComponent } from './promotion.component';
import { DaffInputModule, DaffButtonModule } from '@daffodil/design';

@NgModule({
  imports: [
    CommonModule,
    DaffInputModule,
    DaffButtonModule
  ],
  declarations: [
    PromotionComponent
  ],
  exports: [
    PromotionComponent
  ]
})
export class PromotionModule { }
