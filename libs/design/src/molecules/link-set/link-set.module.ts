import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffLinkSetComponent } from './link-set/link-set.component';
import { DaffLinkSetSubheadingDirective } from './link-set-subheading/link-set-subheading.directive';
import { DaffLinkSetHeadingDirective } from './link-set-heading/link-set-heading.directive';
import { DaffLinkSetItemComponent } from './link-set-item/link-set-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DaffLinkSetComponent,
    DaffLinkSetHeadingDirective,
    DaffLinkSetSubheadingDirective,
    DaffLinkSetItemComponent
  ],
  declarations: [
    DaffLinkSetComponent,
    DaffLinkSetHeadingDirective,
    DaffLinkSetSubheadingDirective,
    DaffLinkSetItemComponent
  ]
})
export class DaffLinkSetModule {}
