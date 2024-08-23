import { NgModule } from '@angular/core';

import { DaffBreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { DaffBreadcrumbItemDirective } from './breadcrumb-item/breadcrumb-item.directive';

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
