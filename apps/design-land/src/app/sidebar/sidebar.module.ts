import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DesignLandArticleEncapsulatedModule } from '../core/article-encapsulated/article-encapsulated.module';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { DesignLandSidebarRoutingModule } from './sidebar-routing.module';
import { DesignLandSidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [
    DesignLandSidebarComponent,
  ],
  imports: [
    CommonModule,
    DesignLandExampleViewerModule,
    DesignLandSidebarRoutingModule,
    DesignLandArticleEncapsulatedModule,
  ],
})
export class DesignLandSidebarModule { }
