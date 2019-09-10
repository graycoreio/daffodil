import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card.component';
import { DesignLandCardRoutingModule } from './card-routing.module';

import { DaffCardModule } from '@daffodil/design';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    DesignLandCardRoutingModule,
    
    DaffCardModule
  ]
})
export class CardModule { }
