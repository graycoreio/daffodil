import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionComponent } from './accordion.component';
import { DesignLandAccordionRoutingModule } from './accordion-routing.module';

import { DaffAccordionModule, DaffArticleModule } from '@daffodil/design';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';


@NgModule({
  declarations: [
    AccordionComponent,
  ],
  imports: [
    CommonModule,
    DesignLandAccordionRoutingModule,
		DesignLandExampleViewerModule,
    DaffAccordionModule,
		DaffArticleModule
  ],
})
export class AccordionModule {

}
