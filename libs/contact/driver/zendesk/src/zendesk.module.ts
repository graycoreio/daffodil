import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffContactDriver } from '@daffodil/contact';

import {
  DaffContactZendeskDriverConfig,
  DaffContactZendeskDriverConfigToken,
} from './config';
import { DaffContactZendeskDriverService } from './zendesk.service';

@NgModule({
  imports: [CommonModule],
})
export class DaffContactZendeskDriverModule {
  static forRoot(
    config: DaffContactZendeskDriverConfig,
  ): ModuleWithProviders<DaffContactZendeskDriverModule> {
    return {
      ngModule: DaffContactZendeskDriverModule,
      providers: [
        { provide: DaffContactZendeskDriverConfigToken, useValue: config },
        {
          provide: DaffContactDriver,
          useClass: DaffContactZendeskDriverService,
        },
      ],
    };
  }
}
