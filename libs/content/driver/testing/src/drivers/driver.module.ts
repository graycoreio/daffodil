import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  provideDaffContentDriver,
  provideDaffContentPageDriver,
} from '@daffodil/content/driver';

import { DaffContentPageTestingService } from './page.service';
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
        provideDaffContentPageDriver(DaffContentPageTestingService),
      ],
    };
  }
}
