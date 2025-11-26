import {
  mergeApplicationConfig,
  ApplicationConfig,
} from '@angular/core';
import {
  provideServerRendering,
  withRoutes,
} from '@angular/ssr';

import { appConfig } from './app.config';
import { serverRoutes } from './app.server.routes';
import { DaffioAssetFetchServerService } from './core/assets/fetch/server.service';
import { provideDaffioAssetFetchService } from './core/assets/fetch/service.interface';
import { provideServerDocsPath } from './docs/services/docs-path-server';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes)),
    provideServerDocsPath(),
    provideDaffioAssetFetchService(DaffioAssetFetchServerService),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
