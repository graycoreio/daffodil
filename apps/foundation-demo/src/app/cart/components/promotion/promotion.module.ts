import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionComponent } from './promotion.component';
import { DaffInputModule } from '../../../design/atoms/form/input/input.module';
import { DaffButtonModule } from '../../../design/atoms/button/button.module';

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
