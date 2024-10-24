import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffContactDriver } from '@daffodil/contact/driver';
import { provideDaffInMemoryBackends } from '@daffodil/driver/in-memory';

import { DaffInMemoryContactService } from './contact.service';
import { DaffInMemoryBackendContactService } from './in-memory-backend/contact-in-memory-backend.service';

@NgModule({
  imports: [CommonModule],
})
export class DaffContactInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffContactInMemoryDriverModule> {
    return {
      ngModule: DaffContactInMemoryDriverModule,
      providers: [
        provideDaffContactDriver(DaffInMemoryContactService),
        provideDaffInMemoryBackends(DaffInMemoryBackendContactService),
      ],
    };
  }
}
