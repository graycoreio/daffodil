import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffioDocsPackagesListContainer } from './packages-list.component';
import { DaffioDocsPackagesListComponentModule } from '../../components/packages-list/packages-list.module';

@NgModule({
  declarations: [
    DaffioDocsPackagesListContainer,
  ],
  exports: [
    DaffioDocsPackagesListContainer,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DaffioDocsPackagesListComponentModule,
  ],
})
export class DaffioDocsPackagesListContainerModule { }
