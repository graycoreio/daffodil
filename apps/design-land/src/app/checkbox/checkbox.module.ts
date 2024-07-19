import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffDocsExampleViewerContainer } from '@daffodil/docs-components';

import { DesignLandCheckboxRoutingModule } from './checkbox-routing.module';
import { DesignLandCheckboxComponent } from './checkbox.component';

@NgModule({
  declarations: [
    DesignLandCheckboxComponent,
  ],
  imports: [
    DaffDocsExampleViewerContainer,
    DesignLandCheckboxRoutingModule,
    CommonModule,
  ],
})
export class DesignLandCheckboxModule {

}
