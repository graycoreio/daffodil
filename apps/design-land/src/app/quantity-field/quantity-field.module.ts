import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffQuantityFieldModule } from '@daffodil/design';
import { DaffArticleModule } from '@daffodil/design/article';

import { DesignLandQuantityFieldRoutingModule } from './quantity-field-routing.module';
import { DesignLandQuantityFieldComponent } from './quantity-field.component';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';

@NgModule({
  declarations: [
    DesignLandQuantityFieldComponent,
  ],
  imports: [
    CommonModule,
    DaffArticleModule,
    DaffQuantityFieldModule,
    DesignLandExampleViewerModule,
    DesignLandQuantityFieldRoutingModule,
  ],
})
export class DesignLandQuantityFieldModule {

}
