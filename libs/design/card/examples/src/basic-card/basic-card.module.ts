import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffCardModule } from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design/button';
import { DaffImageModule } from '@daffodil/design/image';

import { BasicCardComponent } from './basic-card.component';

@NgModule({
  declarations: [
    BasicCardComponent,
  ],
  imports: [
    CommonModule,
    DaffCardModule,
    DaffImageModule,
    DaffButtonModule,

    FontAwesomeModule,
  ],
  exports: [
    BasicCardComponent,
  ],
})
export class BasicCardModule { }
