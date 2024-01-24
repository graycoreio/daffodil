import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export {
  AppServerModule,
  AppServerModule as default,
} from './app/app.server.module';
