import { NgModule } from '@angular/core';

import { provideDaffNewsletterStateTesting } from './provider';

/**
 * @deprecated in favor of {@link provideDaffNewsletterStateTesting}
 */
@NgModule({
  providers: [
    provideDaffNewsletterStateTesting(),
  ],
})
export class DaffNewsletterStateTestingModule { }
