import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';

import { DesignLandNativeSelectRoutingModule } from './native-select-routing.module';
import { DesignLandNativeSelectComponent } from './native-select.component';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';


@NgModule({
  declarations: [
    DesignLandNativeSelectComponent,
  ],
  imports: [
    CommonModule,
    DesignLandNativeSelectRoutingModule,
    DesignLandExampleViewerModule,
    DaffArticleModule,
  ],
})
export class DesignLandNativeSelectModule { }
