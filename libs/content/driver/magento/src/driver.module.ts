import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffContentDriver } from '@daffodil/content/driver';

import { MagentoContentService } from './service';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffContentMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffContentMagentoDriverModule> {
    return {
      ngModule: DaffContentMagentoDriverModule,
      providers: [
        {
          provide: DaffContentDriver,
          useExisting: MagentoContentService,
        },
      ],
    };
  }
}
