import { NgModule } from '@angular/core';

import { provideDaffContactStateTesting } from './provider';

/**
 * @deprecated in favor of {@link provideDaffContactStateTesting} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  providers: [
    provideDaffContactStateTesting(),
  ],
})
export class DaffContactStateTestingModule {}
