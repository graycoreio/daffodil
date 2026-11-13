import { NgModule } from '@angular/core';

import { provideDaffGeographyStateTesting } from './provider';

/**
 * @deprecated in favor of {@link provideDaffGeographyStateTesting} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  providers: [
    provideDaffGeographyStateTesting(),
  ],
})
export class DaffGeographyStateTestingModule {}
