import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffContactDriver } from '@daffodil/contact';
import { DaffInMemoryContactService } from './contact.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffContactInMemoryDriverModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DaffContactInMemoryDriverModule,
      providers: [
        {
          provide: DaffContactDriver,
          useClass: DaffInMemoryContactService
        }
      ]
    };
  }
}