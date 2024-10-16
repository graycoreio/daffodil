import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffContentDriver } from '@daffodil/content/driver';

import { DaffTestingContentService } from './service';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffContentTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffContentTestingDriverModule> {
    return {
      ngModule: DaffContentTestingDriverModule,
      providers: [
        provideDaffContentDriver(DaffTestingContentService),
      ],
    };
  }
}
