import { NgModule } from '@angular/core';

import { daffioDocsGuideComponentProvider } from './components/doc/provider';
import { DaffioGuidesRoutingModule } from './guides-routing.module';

@NgModule({
  imports: [
    DaffioGuidesRoutingModule,
  ],
  providers: [
    daffioDocsGuideComponentProvider(),
  ],
})
export class DaffioGuidesModule {}
