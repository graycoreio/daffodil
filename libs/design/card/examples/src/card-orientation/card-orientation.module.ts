import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design/button';
import { DaffCardModule } from '@daffodil/design/card';
import { DaffImageModule } from '@daffodil/design/image';

import { CardOrientationComponent } from './card-orientation.component';

@NgModule({
  declarations: [
    CardOrientationComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffCardModule,
    DaffImageModule,
    DaffButtonModule,
    FontAwesomeModule,
  ],
  exports: [
    CardOrientationComponent,
  ],
})
export class CardOrientationModule { }
