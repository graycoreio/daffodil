import { NgModule } from '@angular/core';

import { DaffRouterNamedViewOutletDirective } from './outlet.directive';

/**
 * @deprecated in favor of importing the standalone {@link DaffRouterNamedViewOutletDirective}
 */
@NgModule({
  imports: [
    DaffRouterNamedViewOutletDirective,
  ],
  exports: [
    DaffRouterNamedViewOutletDirective,
  ],
})
export class DaffRouterNamedViewOutletModule {}
