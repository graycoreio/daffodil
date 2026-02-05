import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NotFoundComponent } from './not-found.component';
import { BestSellersComponent } from '../../product/containers/best-sellers/best-sellers.component';

@NgModule({
  imports: [
    CommonModule,
    BestSellersComponent,
  ],
  declarations: [
    NotFoundComponent,
  ],
  exports: [
    NotFoundComponent,
  ],
})
export class NotFoundModule { }
