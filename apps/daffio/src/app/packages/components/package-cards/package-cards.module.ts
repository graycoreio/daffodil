import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffCardModule } from '@daffodil/design/card';

import { DaffioDocsPackageCardsComponent } from './package-cards.component';

@NgModule({
  declarations: [
    DaffioDocsPackageCardsComponent,
  ],
  exports: [
    DaffioDocsPackageCardsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DaffCardModule,
  ],
})
export class DaffioDocsPackageCardsComponentModule { }
