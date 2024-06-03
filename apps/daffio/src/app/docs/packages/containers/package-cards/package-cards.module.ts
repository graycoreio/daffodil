import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffCardModule } from '@daffodil/design/card';

import { DaffioDocsPackageCardsContainer } from './package-cards.component';
import { DaffioDocsPackageCardsComponentModule } from '../../components/package-cards/package-cards.module';


@NgModule({
  declarations: [
    DaffioDocsPackageCardsContainer,
  ],
  exports: [
    DaffioDocsPackageCardsContainer,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DaffCardModule,
    DaffioDocsPackageCardsComponentModule,
  ],
})
export class DaffioDocsPackageCardsContainerModule { }
