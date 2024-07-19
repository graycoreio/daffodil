import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffArticleModule } from '@daffodil/design/article';
import { DaffDocsExampleViewerContainer } from '@daffodil/docs-components';

import { DesignLandCalloutRoutingModule } from './callout-routing.module';
import { DesignLandCalloutComponent } from './callout.component';

@NgModule({
  declarations: [
    DesignLandCalloutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

    DesignLandCalloutRoutingModule,

    DaffArticleModule,
    DaffDocsExampleViewerContainer,
  ],
})
export class DesignLandCalloutModule {
}
