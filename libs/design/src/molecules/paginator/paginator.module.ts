import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffPaginatorComponent } from './paginator.component';
import { DaffButtonModule } from '../../atoms/button/public_api';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    DaffButtonModule,
  ],
  declarations: [
    DaffPaginatorComponent,
  ],
  exports: [
    DaffPaginatorComponent,
  ],
})
export class DaffPaginatorModule {}
