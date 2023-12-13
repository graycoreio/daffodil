import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  DaffCardModule,
  DaffImageModule,
} from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design/button';

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
