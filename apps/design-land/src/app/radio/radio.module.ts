import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffDocsExampleViewerContainer } from '@daffodil/docs-components';

import { DesignLandRadioRoutingModule } from './radio-routing.module';
import { DesignLandRadioComponent } from './radio.component';

@NgModule({
  declarations: [
    DesignLandRadioComponent,
  ],
  imports: [
    DaffDocsExampleViewerContainer,
    DesignLandRadioRoutingModule,
    CommonModule,
  ],
})
export class DesignLandRadioModule {

}
