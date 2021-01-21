import { NgModule, Injector, ComponentFactoryResolver } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignLandTypographyComponent } from './typography.component';
import { DesignLandTypographyRoutingModule } from './typography-routing.module';

import { DaffArticleModule } from '@daffodil/design';

@NgModule({
  declarations: [
    DesignLandTypographyComponent
  ],
  imports: [
    CommonModule,
    DesignLandTypographyRoutingModule,
    DaffArticleModule
  ],
})
export class DesignLandTypographyModule {}