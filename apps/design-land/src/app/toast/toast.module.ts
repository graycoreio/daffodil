import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffArticleModule } from '@daffodil/design';
import { DaffToastModule } from '@daffodil/design/toast';

import { DesignLandArticleEncapsulatedModule } from '../core/article-encapsulated/article-encapsulated.module';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { DesignLandToastRoutingModule } from './toast-routing-module';
import { DesignLandToastComponent } from './toast.component';

@NgModule({
  declarations: [
    DesignLandToastComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DesignLandToastRoutingModule,
    DesignLandExampleViewerModule,
    DesignLandArticleEncapsulatedModule,

    DaffArticleModule,
    DaffToastModule,
  ],
})
export class DesignLandToastModule {

}
