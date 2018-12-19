import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundComponent } from './not-found.component';
import { BestSellersModule } from '../../product/components/best-sellers/best-sellers.module';

@NgModule({
  imports: [
    CommonModule,
    BestSellersModule
  ],
  declarations: [
    NotFoundComponent
  ],
  exports: [
    NotFoundComponent
  ]
})
export class NotFoundModule { }
