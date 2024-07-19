import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffArticleModule } from '@daffodil/design/article';
import { DaffDocsExampleViewerContainer } from '@daffodil/docs-components';

import { DesignLandAccordionRoutingModule } from './accordion-routing.module';
import { DesignLandAccordionComponent } from './accordion.component';


@NgModule({
  declarations: [
    DesignLandAccordionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

    DesignLandAccordionRoutingModule,
    DaffDocsExampleViewerContainer,
    DaffArticleModule,
  ],
})
export class DesignLandAccordionModule {

}
