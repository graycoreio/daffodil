import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { DaffioAppComponent } from './app.component';
import { AppModule } from './app.module';
import { DaffioAssetFetchServerService } from './core/assets/fetch/server.service';
import { DaffioAssetFetchService } from './core/assets/fetch/service.interface';
import { DAFFIO_DOCS_PATH_TOKEN } from './docs/services/docs-path.token';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [DaffioAppComponent],
  providers: [
    {
      provide: DAFFIO_DOCS_PATH_TOKEN,
      useValue: environment.docsPath,
    },
    {
      provide: DaffioAssetFetchService,
      useExisting: DaffioAssetFetchServerService,
    },
  ],
})
export class AppServerModule {}
