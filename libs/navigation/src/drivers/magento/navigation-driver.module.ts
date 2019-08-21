import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffNavigationDriver } from '../injection-tokens/navigation-driver.token';
import { DaffMagentoNavigationService } from './navigation.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffNavigationMagentoDriverModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DaffNavigationMagentoDriverModule,
      providers: [
        {
          provide: DaffNavigationDriver,
          useExisting: DaffMagentoNavigationService
        }
      ]
    };
  }
}
