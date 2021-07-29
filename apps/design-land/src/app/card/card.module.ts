import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  DaffArticleModule,
  DaffCardModule,
  DaffImageModule,
} from '@daffodil/design';

import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { DesignLandCardRoutingModule } from './card-routing.module';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [
    CardComponent,
  ],
  imports: [
    CommonModule,
    DesignLandCardRoutingModule,
    DesignLandExampleViewerModule,
    ReactiveFormsModule,
    DaffArticleModule,
    DaffCardModule,
    DaffImageModule,
  ],
})
export class CardModule {

}
