import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffContactDriver } from '@daffodil/contact';
import { DaffContactZendeskService } from './zendesk.service';
import { DaffContactZendeskConfig, DaffContactZendeskConfigToken } from './config';
import { DaffContactZendeskConfigService } from './config.service';

@NgModule({
  imports: [CommonModule],
})
export class DaffContactZendeskDriverModule {
  static forRoot(
    config: DaffContactZendeskConfig
  ): ModuleWithProviders<DaffContactZendeskDriverModule> {
    return {
      ngModule: DaffContactZendeskDriverModule,
      providers: [
        { provide: DaffContactZendeskConfigToken, useValue: config },
        DaffContactZendeskConfigService,
        { provide: DaffContactDriver, useClass: DaffContactZendeskService },
      ],
    };
  }
}
