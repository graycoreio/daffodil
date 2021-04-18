import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  DaffCardModule,
  DaffImageModule,
} from '@daffodil/design';

import { CardThemingComponent } from './card-theming.component';

@NgModule({
  declarations: [
    CardThemingComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffCardModule,
    DaffImageModule,
  ],
  exports: [
    CardThemingComponent,
  ],
})
export class CardThemingModule { }
