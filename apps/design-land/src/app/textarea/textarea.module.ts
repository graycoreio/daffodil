import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';

import { DesignLandTextareaRoutingModule } from './textarea-routing.module';
import { DesignLandTextareaComponent } from './textarea.component';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';


@NgModule({
  declarations: [
    DesignLandTextareaComponent,
  ],
  imports: [
    CommonModule,
    DesignLandTextareaRoutingModule,
    DesignLandExampleViewerModule,
    DaffArticleModule,
  ],
})
export class DesignLandTextareaModule { }
