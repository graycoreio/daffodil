import { NgModule } from '@angular/core';

import { provideDaffioDocsGuidesContentComponent } from './components/guides-content/guides-content.provider';
import { DaffioGuidesRoutingModule } from './guides-routing.module';

@NgModule({
  imports: [
    DaffioGuidesRoutingModule,
  ],
  providers: [
    provideDaffioDocsGuidesContentComponent(),
  ],
})
export class DaffioGuidesModule {}
