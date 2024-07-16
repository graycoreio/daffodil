import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffQuantityFieldModule } from '@daffodil/design';
import { DaffArticleModule } from '@daffodil/design/article';
import { DaffDocsExampleViewerContainer } from '@daffodil/docs-components';

import { DesignLandQuantityFieldRoutingModule } from './quantity-field-routing.module';
import { DesignLandQuantityFieldComponent } from './quantity-field.component';

@NgModule({
  declarations: [
    DesignLandQuantityFieldComponent,
  ],
  imports: [
    CommonModule,
    DaffArticleModule,
    DaffQuantityFieldModule,
    DaffDocsExampleViewerContainer,
    DesignLandQuantityFieldRoutingModule,
  ],
})
export class DesignLandQuantityFieldModule {

}
