import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MiniCartItemComponent } from './minicart-item.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    MiniCartItemComponent,
  ],
  exports: [
    MiniCartItemComponent,
  ],
})
export class MiniCartItemModule { }
