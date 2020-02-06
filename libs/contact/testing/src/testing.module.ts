import { NgModule, ModuleWithProviders } from '@angular/core';
import { DaffContactDriver } from '@daffodil/contact';
import { DaffTestingContactService } from './drivers/testing/contact.service';

@NgModule()
export class DaffContactTestingDriverModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DaffContactTestingDriverModule,
      providers: [
        {
          provide: DaffContactDriver,
          useExisting: DaffTestingContactService
        }
      ]
    };
  }
}