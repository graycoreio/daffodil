import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design';

import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { DesignLandCardRoutingModule } from './card-routing.module';
import { DesignLandCardComponent } from './card.component';

@NgModule({
  declarations: [
    DesignLandCardComponent,
  ],
  imports: [
    CommonModule,
    DesignLandCardRoutingModule,
    DesignLandExampleViewerModule,
    DaffArticleModule,
  ],
})
export class DesignLandCardModule {

}
