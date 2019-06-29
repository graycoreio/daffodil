import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DaffioApiDocContainer } from './api-doc.component';
import { DaffioApiDocModule } from '../../components/api-doc/api-doc.module';
import { ApiDocServiceProviderModule } from '../../services/api-doc-provider-service.module';

@NgModule({
  imports: [
    CommonModule,
    DaffioApiDocModule,
    HttpClientModule,
    ApiDocServiceProviderModule
  ],
  declarations: [
    DaffioApiDocContainer
  ],
  exports: [
    DaffioApiDocContainer
  ]
})
export class DaffioApiDocContainerModule {}
