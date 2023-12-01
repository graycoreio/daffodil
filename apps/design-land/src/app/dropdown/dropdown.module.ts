import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design';

import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { DesignLandDropdownRoutingModule } from './dropdown-routing.module';
import { DesignLandDropdownComponent } from './dropdown.component';


@NgModule({
  declarations: [
    DesignLandDropdownComponent,
  ],
  imports: [
    CommonModule,
    DesignLandDropdownRoutingModule,
    DesignLandExampleViewerModule,
    DaffArticleModule,
  ],
})
export class DesignLandDropdownModule {

}
