import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffArticleModule } from '@daffodil/design/article';
import { DaffDocsExampleViewerContainer } from '@daffodil/docs-components';


import { DesignLandToastRoutingModule } from './toast-routing-module';
import { DesignLandToastComponent } from './toast.component';
import { DesignLandArticleEncapsulatedModule } from '../core/article-encapsulated/article-encapsulated.module';

@NgModule({
  declarations: [
    DesignLandToastComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DesignLandToastRoutingModule,
    DaffDocsExampleViewerContainer,
    DesignLandArticleEncapsulatedModule,

    DaffArticleModule,
  ],
})
export class DesignLandToastModule {}
