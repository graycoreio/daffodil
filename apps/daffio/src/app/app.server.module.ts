import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { provideDaffDocsServerFetchAssetService } from '@daffodil/documentation/server';

import { DaffioAppComponent } from './app.component';
import { AppModule } from './app.module';
import { provideServerDocsPath } from './docs/services/docs-path-server';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [DaffioAppComponent],
  providers: [
    provideServerDocsPath(),
    provideDaffDocsServerFetchAssetService(),
  ],
})
export class AppServerModule {}
