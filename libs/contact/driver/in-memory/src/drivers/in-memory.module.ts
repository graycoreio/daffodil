import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffContactDriver } from '@daffodil/contact/driver';
import { provideDaffInMemoryBackends } from '@daffodil/driver/in-memory';

import { DaffInMemoryContactService } from './contact.service';
import { DaffInMemoryBackendContactService } from '../backend/contact.service';

@NgModule({
  imports: [CommonModule],
})
export class DaffContactInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffContactInMemoryDriverModule> {
    return {
      ngModule: DaffContactInMemoryDriverModule,
      providers: [
        {
          provide: DaffContactDriver,
          useClass: DaffInMemoryContactService,
        },
        provideDaffInMemoryBackends(DaffInMemoryBackendContactService),
      ],
    };
  }
}
