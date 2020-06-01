import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  DaffCardModule,
  DaffImageModule
} from '@daffodil/design';

import { CardWithThemeComponent } from './card-with-theme.component';

@NgModule({
  declarations: [
    CardWithThemeComponent
  ],
  imports: [
    CommonModule,
    DaffCardModule,
    DaffImageModule
  ],
  exports: [
    CardWithThemeComponent
  ]
})
export class CardWithThemeModule { }
