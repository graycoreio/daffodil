import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffAuthorizeNetDriver } from '@daffodil/authorizenet/driver';

import { DaffTestingAuthorizeNetService } from './authorize-net.service';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffTestingAuthorizeNetDriverModule {
  static forRoot(): ModuleWithProviders<DaffTestingAuthorizeNetDriverModule> {
    return {
      ngModule: DaffTestingAuthorizeNetDriverModule,
      providers: [
        {
          provide: DaffAuthorizeNetDriver,
          useExisting: DaffTestingAuthorizeNetService,
        },
      ],
    };
  }
}
