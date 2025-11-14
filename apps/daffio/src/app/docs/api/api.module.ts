import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { DaffioDocsApiRoutingModule } from './api-routing.module';
import { provideDaffioDocsApiContentComponent } from './components/api-content/api-content.provider';
import { DaffioApiListPageComponent } from './pages/api-list-page/api-list-page.component';
import { daffioDocsApiRolesProvider } from './roles/api-roles.provider';

@NgModule({
  imports: [
    CommonModule,
    DaffioDocsApiRoutingModule,
    DaffioApiListPageComponent,
  ],
  providers: [
    provideDaffioDocsApiContentComponent(),
    ...daffioDocsApiRolesProvider(),
  ],
})
export class DaffioApiModule {}
