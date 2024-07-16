import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';
import { DaffDocsExampleViewerContainer } from '@daffodil/docs-components';

import { DesignLandHeroRoutingModule } from './hero-routing.module';
import { DesignLandHeroComponent } from './hero.component';

@NgModule({
  imports: [
    CommonModule,
    DesignLandHeroRoutingModule,
    DaffDocsExampleViewerContainer,

    DaffArticleModule,
  ],
  declarations: [
    DesignLandHeroComponent,
  ],
})
export class DesignLandHeroModule {

}
