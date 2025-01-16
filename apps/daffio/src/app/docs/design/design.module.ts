import { NgModule } from '@angular/core';

import { provideDaffioDocsDesignComponentContentComponent } from './components/component-content/component-content.provider';
import { DaffioDocsDesignRoutingModule } from './design-routing.module';
import { DaffioDocsDesignIndexService } from './services/index.service';
import { provideDaffioDocsPackagesContentComponent } from '../packages/components/packages-content/packages-content.provider';

@NgModule({
  imports: [
    DaffioDocsDesignRoutingModule,
  ],
  providers: [
    DaffioDocsDesignIndexService,
    provideDaffioDocsDesignComponentContentComponent(),
    provideDaffioDocsPackagesContentComponent(),
  ],
})
export class DaffioDocsDesignModule {}
