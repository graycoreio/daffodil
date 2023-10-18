import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design';

import { DesignLandHeroRoutingModule } from './hero-routing.module';
import { DesignLandHeroComponent } from './hero.component';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';

@NgModule({
  imports: [
    CommonModule,
    DesignLandHeroRoutingModule,
    DesignLandExampleViewerModule,

    DaffArticleModule,
  ],
  declarations: [
    DesignLandHeroComponent,
  ],
})
export class DesignLandHeroModule {

}
