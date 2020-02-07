import { NgModule, ModuleWithProviders } from '@angular/core';
import { DaffContactDriver } from '@daffodil/contact';
import { DaffInMemoryContactService } from './contact.service';
import { CommonModule } from '@angular/common';

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