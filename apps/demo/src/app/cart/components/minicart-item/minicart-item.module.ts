import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiniCartItemComponent } from './minicart-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MiniCartItemComponent
  ],
  exports: [
    MiniCartItemComponent
  ]
})
export class MiniCartItemModule { }
