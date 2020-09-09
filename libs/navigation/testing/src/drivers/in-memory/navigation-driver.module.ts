import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffNavigationDriver } from '@daffodil/navigation';

import { DaffInMemoryNavigationService } from './navigation.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffNavigationInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffNavigationInMemoryDriverModule> {
    return {
      ngModule: DaffNavigationInMemoryDriverModule,
      providers: [
        {
          provide: DaffNavigationDriver,
          useExisting: DaffInMemoryNavigationService
        }
      ]
    };
  }
}
