import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffTreeModule } from '@daffodil/design/tree';

import { DesignLandNavComponent } from './nav.component';

@NgModule({
  declarations: [
    DesignLandNavComponent,
  ],
  exports: [
    DesignLandNavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DaffTreeModule,
  ],
})
export class DesignLandNavModule { }
