import { bootstrapApplication } from '@angular/platform-browser';

import { DaffioAppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(DaffioAppComponent, appConfig)
  .catch((err) => console.error(err));
