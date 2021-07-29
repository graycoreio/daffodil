import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  DaffArticleModule,
  DaffHeroModule,
} from '@daffodil/design';

import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { DesignLandHeroRoutingModule } from './hero-routing.module';
import { HeroComponent } from './hero.component';


@NgModule({
  declarations: [
    HeroComponent,
  ],
  imports: [
    CommonModule,
    DesignLandHeroRoutingModule,
    DesignLandExampleViewerModule,

    DaffArticleModule,
    DaffHeroModule,
  ],
})
export class DesignLandHeroModule {

}
