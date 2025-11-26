import {
  BootstrapContext,
  bootstrapApplication,
} from '@angular/platform-browser';

import { DaffioAppComponent } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = (context: BootstrapContext) =>
  bootstrapApplication(DaffioAppComponent, config, context);

export default bootstrap;
