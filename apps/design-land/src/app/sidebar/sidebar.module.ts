import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  DaffSidebarModule,
  DaffButtonModule,
  DaffNativeSelectModule,
  DaffFormFieldModule,
  DaffArticleModule,
} from '@daffodil/design';

import { DesignLandArticleEncapsulatedModule } from '../core/article-encapsulated/article-encapsulated.module';
import { DesignLandSidebarRoutingModule } from './sidebar-routing.module';
import { DesignLandSidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [
    DesignLandSidebarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DaffArticleModule,
    DaffNativeSelectModule,
    DaffFormFieldModule,
    DaffButtonModule,
    DaffSidebarModule,
    DesignLandSidebarRoutingModule,
    DesignLandArticleEncapsulatedModule,
  ],
})
export class DesignLandSidebarModule { }
