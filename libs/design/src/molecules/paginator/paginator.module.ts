import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffPaginatorComponent } from './paginator.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
  ],
  declarations: [
    DaffPaginatorComponent,
  ],
  exports: [
    DaffPaginatorComponent,
  ],
})
export class DaffPaginatorModule {}
