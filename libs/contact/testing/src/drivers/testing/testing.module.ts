import { NgModule, ModuleWithProviders } from '@angular/core';
import { DaffContactDriver } from '@daffodil/contact';
import { DaffTestingContactService } from './contact.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffContactTestingDriverModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DaffContactTestingDriverModule,
      providers: [
        {
          provide: DaffContactDriver,
          useClass: DaffTestingContactService
        }
      ]
    };
  }
}