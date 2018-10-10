import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionComponent } from './promotion.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PromotionComponent
  ],
  exports: [
    PromotionComponent
  ]
})
export class PromotionModule { }
