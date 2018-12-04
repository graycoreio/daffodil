import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffCoreTestingModule } from '../../../index';
import { DaffDriver } from '@daffodil/driver';
import { DaffTestingDriver } from './testing.driver';

@NgModule({
  imports: [
    CommonModule,
    DaffCoreTestingModule
  ],
  providers: [
    {
      provide: DaffDriver,
      useExisting: DaffTestingDriver
    }
  ]
})
export class DaffDriverTestingModule {
  constructor (@Optional() @SkipSelf() parentModule: DaffDriverTestingModule) {
    if (parentModule) {
      throw new Error(
        'DaffDriverTestingModule is already loaded. Import it in the AppModule only');
    }
  }
}
