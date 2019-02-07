import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffCardModule } from '@daffodil/design';

import { DesignLandCardRoutingModule } from './card-routing.module';

import { CardComponent } from './card.component';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    DaffCardModule,
    DesignLandCardRoutingModule
  ]
})
export class CardModule { }
