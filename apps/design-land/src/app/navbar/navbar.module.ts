import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  DaffArticleModule,
  DaffNavbarModule,
  DaffButtonModule,
} from '@daffodil/design';

import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { DesignLandNavbarRoutingModule } from './navbar-routing.module';
import { DesignLandNavbarComponent } from './navbar.component';


@NgModule({
  declarations: [
    DesignLandNavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

    DesignLandNavbarRoutingModule,
    DesignLandExampleViewerModule,

    DaffArticleModule,
    DaffNavbarModule,
    DaffButtonModule,
  ],
})
export class DesignLandNavbarModule { }
