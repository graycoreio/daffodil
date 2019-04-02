import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DaffioDocsRoutingModule } from './docs-routing.module';
import { DaffioDocsComponentModule } from './pages/docs/docs.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    
    DaffioDocsRoutingModule,
    DaffioDocsComponentModule
  ]
})
export class DaffioDocsModule { }
