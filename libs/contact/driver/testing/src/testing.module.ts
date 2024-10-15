import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffContactDriver } from '@daffodil/contact/driver';

import { DaffTestingContactService } from './contact.service';

@NgModule({
  imports: [CommonModule],
})
export class DaffContactTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffContactTestingDriverModule> {
    return {
      ngModule: DaffContactTestingDriverModule,
      providers: [
        provideDaffContactDriver(DaffTestingContactService),
      ],
    };
  }
}
