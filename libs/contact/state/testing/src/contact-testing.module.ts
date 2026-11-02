import { NgModule } from '@angular/core';

import { provideDaffContactStateTesting } from './provider';

/**
 * @deprecated in favor of {@link provideDaffContactStateTesting}
 */
@NgModule({
  providers: [
    provideDaffContactStateTesting(),
  ],
})
export class DaffContactStateTestingModule {}
