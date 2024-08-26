import { NgModule } from '@angular/core';

import { DaffBreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { DaffBreadcrumbItemDirective } from './breadcrumb-item/breadcrumb-item.directive';

/** @deprecated in favor of {@link DAFF_BREADCRUMB_COMPONENTS} */
@NgModule({
  imports: [
    DaffBreadcrumbComponent,
    DaffBreadcrumbItemDirective,
  ],
  exports: [
    DaffBreadcrumbComponent,
    DaffBreadcrumbItemDirective,
  ],
})
export class DaffBreadcrumbModule { }
