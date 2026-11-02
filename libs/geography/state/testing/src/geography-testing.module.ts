import { NgModule } from '@angular/core';

import { provideDaffGeographyStateTesting } from './provider';

/**
 * @deprecated in favor of {@link provideDaffGeographyStateTesting}
 */
@NgModule({
  providers: [
    provideDaffGeographyStateTesting(),
  ],
})
export class DaffGeographyStateTestingModule {}
