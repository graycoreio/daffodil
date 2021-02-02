import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BestSellersModule } from '../../product/containers/best-sellers/best-sellers.module';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  imports: [
    CommonModule,
    BestSellersModule,
  ],
  declarations: [
    NotFoundComponent,
  ],
  exports: [
    NotFoundComponent,
  ],
})
export class NotFoundModule { }
