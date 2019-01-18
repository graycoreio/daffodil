import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiniCartItemComponent } from './minicart-item.component';

import {
  DaffLinkModule
} from '@daffodil/design';

@NgModule({
  imports: [
    CommonModule,
    DaffLinkModule
  ],
  declarations: [
    MiniCartItemComponent
  ],
  exports: [
    MiniCartItemComponent
  ]
})
export class MiniCartItemModule { }
