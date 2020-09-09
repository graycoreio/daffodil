import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffNavigationDriver } from '@daffodil/navigation';

import { DaffTestingNavigationService } from './navigation.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffNavigationTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffNavigationTestingDriverModule> {
    return {
      ngModule: DaffNavigationTestingDriverModule,
      providers: [
        {
          provide: DaffNavigationDriver,
          useExisting: DaffTestingNavigationService
        }
      ]
    };
  }
}
