import { NgModule } from '@angular/core';

import { DaffioDocsDesignRoutingModule } from './design-routing.module';
import { DaffioDocsDesignIndexService } from './services/index.service';

@NgModule({
  imports: [
    DaffioDocsDesignRoutingModule,
  ],
  providers: [
    DaffioDocsDesignIndexService,
  ],
})
export class DaffioDocsDesignModule {}
