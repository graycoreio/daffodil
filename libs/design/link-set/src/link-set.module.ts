import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffLinkSetComponent } from './link-set/link-set.component';
import { DaffLinkSetHeadingDirective } from './link-set-heading/link-set-heading.directive';
import { DaffLinkSetItemComponent } from './link-set-item/link-set-item.component';
import { DaffLinkSetSubheadingDirective } from './link-set-subheading/link-set-subheading.directive';

/**
 * @deprecated in favor of {@link DAFF_LINK_SET_COMPONENTS} Deprecated in version 0.78.0. Will be removed in version 0.81.0.
 */
@NgModule({
  imports: [
    CommonModule,
    DaffLinkSetComponent,
    DaffLinkSetHeadingDirective,
    DaffLinkSetSubheadingDirective,
    DaffLinkSetItemComponent,
  ],
  exports: [
    DaffLinkSetComponent,
    DaffLinkSetHeadingDirective,
    DaffLinkSetSubheadingDirective,
    DaffLinkSetItemComponent,
  ],
})
export class DaffLinkSetModule {}
