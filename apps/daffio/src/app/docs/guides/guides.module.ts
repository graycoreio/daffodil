import { NgModule } from '@angular/core';

import { daffioDocsGuidesContentComponentProvider } from './components/guides-content/guides-content.provider';
import { DaffioGuidesRoutingModule } from './guides-routing.module';

@NgModule({
  imports: [
    DaffioGuidesRoutingModule,
  ],
  providers: [
    daffioDocsGuidesContentComponentProvider(),
  ],
})
export class DaffioGuidesModule {}
