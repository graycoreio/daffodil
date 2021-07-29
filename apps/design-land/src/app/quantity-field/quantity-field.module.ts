import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  DaffArticleModule,
  DaffQuantityFieldModule,
} from '@daffodil/design';

import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { DesignLandQuantityFieldRoutingModule } from './quantity-field-routing.module';
import { DesignLandQuantityFieldComponent } from './quantity-field.component';

@NgModule({
  declarations: [
    DesignLandQuantityFieldComponent,
  ],
  imports: [
    CommonModule,
    DesignLandExampleViewerModule,
    ReactiveFormsModule,
    DaffArticleModule,
    DaffQuantityFieldModule,
    DesignLandQuantityFieldRoutingModule,
  ],
})
export class DesignLandQuantityFieldModule {

}
