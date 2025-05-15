import { NgModule } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import {
  provideServerRouting,
  withAppShell,
} from '@angular/ssr';

import { DaffioAppComponent } from './app.component';
import { AppModule } from './app.module';
import { serverRoutes } from './app.server.routes';
import { DaffioAssetFetchServerService } from './core/assets/fetch/server.service';
import { provideDaffioAssetFetchService } from './core/assets/fetch/service.interface';
import { TemplateComponent } from './core/template/template.component';
import { provideServerDocsPath } from './docs/services/docs-path-server';

@NgModule({
  imports: [
    AppModule,
  ],
  bootstrap: [DaffioAppComponent],
  providers: [
    provideServerRendering(),
    provideServerRouting(serverRoutes, withAppShell(TemplateComponent)),
    provideServerDocsPath(),
    provideDaffioAssetFetchService(DaffioAssetFetchServerService),
  ],
})
export class AppServerModule {}
