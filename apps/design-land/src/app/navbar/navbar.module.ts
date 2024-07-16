import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffArticleModule } from '@daffodil/design/article';
import { DaffNavbarModule } from '@daffodil/design/navbar';
import { DaffDocsExampleViewerContainer } from '@daffodil/docs-components';

import { DesignLandNavbarRoutingModule } from './navbar-routing.module';
import { DesignLandNavbarComponent } from './navbar.component';
import { DesignLandArticleEncapsulatedModule } from '../core/article-encapsulated/article-encapsulated.module';

@NgModule({
  declarations: [
    DesignLandNavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

    DesignLandNavbarRoutingModule,
    DaffDocsExampleViewerContainer,

    DaffNavbarModule,
    DaffArticleModule,
    DesignLandArticleEncapsulatedModule,
  ],
})
export class DesignLandNavbarModule { }
