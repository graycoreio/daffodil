import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffArticleModule } from '@daffodil/design';

import { DesignLandAccordionRoutingModule } from './accordion-routing.module';
import { DesignLandAccordionComponent } from './accordion.component';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';


@NgModule({
  declarations: [
    DesignLandAccordionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

    DesignLandAccordionRoutingModule,
    DesignLandExampleViewerModule,
    DaffArticleModule,
  ],
})
export class DesignLandAccordionModule {

}
