import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';
import { DaffDocsExampleViewerContainer } from '@daffodil/docs-components';

import { DesignLandInputRoutingModule } from './input-routing.module';
import { DesignLandInputComponent } from './input.component';


@NgModule({
  declarations: [
    DesignLandInputComponent,
  ],
  imports: [
    CommonModule,
    DesignLandInputRoutingModule,
    DaffDocsExampleViewerContainer,
    DaffArticleModule,
  ],
})
export class DesignLandInputModule { }
