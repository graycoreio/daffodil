import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffioNavigationItemComponent } from './navigation-item.component';
import { RouterModule } from '@angular/router';
import { DaffLinkSetModule } from 'libs/design/src';

@NgModule({
  declarations: [DaffioNavigationItemComponent],
  imports: [
    CommonModule,
    RouterModule,
    DaffLinkSetModule
  ],
  exports: [DaffioNavigationItemComponent]
})
export class DaffioNavigationItemModule { }
