import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { DaffioAppComponent } from './app.component';
import { AppModule } from './app.module';
import { DaffioAssetFetchServerService } from './core/assets/fetch/server.service';
import { DaffioAssetFetchService } from './core/assets/fetch/service.interface';
import { DAFFIO_DOCS_PATH_TOKEN } from './docs/services/docs-path.token';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [DaffioAppComponent],
  providers: [
    {
      provide: DAFFIO_DOCS_PATH_TOKEN,
      useValue: process.env.DAFFIO_DOCS_PATH || '',
    },
    {
      provide: DaffioAssetFetchService,
      useExisting: DaffioAssetFetchServerService,
    },
  ],
})
export class AppServerModule {}
