import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffCardModule } from '@daffodil/design';
import { DaffImageModule } from '@daffodil/design/image';

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
