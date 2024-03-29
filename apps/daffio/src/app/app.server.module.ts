import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { DaffioAppComponent } from './app.component';
import { AppModule } from './app.module';
import { DaffioAssetFetchServerService } from './core/assets/fetch/server.service';
import { DaffioAssetFetchService } from './core/assets/fetch/service.interface';
import { provideServerDocsPath } from './docs/services/docs-path-server';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [DaffioAppComponent],
  providers: [
    provideServerDocsPath(),
    {
      provide: DaffioAssetFetchService,
      useExisting: DaffioAssetFetchServerService,
    },
  ],
})
export class AppServerModule {}
